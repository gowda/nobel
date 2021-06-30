# frozen_string_literal: true

class FetchLaureatesJob < ApplicationJob
  def perform(offset = 0)
    return if laureates_attrs(offset).empty?

    laureates_attrs(offset).each { |attrs| create_laureate(attrs) }
    schedule_next(offset)
  end

  def create_laureate(attrs)
    laureate = if attrs.person?
                 create_person(attrs)
               else
                 create_org(attrs)
               end

    attrs.awards.each { |award_attrs| create_award(award_attrs, laureate) }
  end

  def create_person(attrs)
    person = Person.find_or_create_by!(attrs.to_h)

    location = Location.find_or_create_by!(attrs.birth_place.to_h)
    person.update(birth_place: location)

    if attrs.death_place.present?
      location = Location.find_or_create_by!(attrs.death_place.to_h)
      person.update(death_place: location)
    end

    person
  end

  def create_org(attrs)
    org = Org.find_or_create_by!(attrs.to_h)

    if attrs.founded_place.present?
      location = Location.find_or_create_by!(attrs.founded_place.to_h)
      org.update(founded_place: location)
    end

    org
  end

  def create_award(attrs, laureate)
    prize_attrs = attrs.prize
    category = Category.find_by(prize_attrs.category.to_h)
    prize = Prize.find_by(year: prize_attrs.year, category: category)
    Award.create!(**attrs.to_h, laureate: laureate, prize: prize)
  end

  def laureates_attrs(offset)
    @laureates_attrs ||= NobelPrize::Client.laureates(offset)
  end

  def schedule_next(offset)
    FetchLaureatesJob.perform_later(offset + laureates_attrs(offset).length)
  end
end
