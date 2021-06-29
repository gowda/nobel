# frozen_string_literal: true

class FetchLaureatesJob < ApplicationJob
  def perform(offset = 0)
    return if laureates_attrs(offset).empty?

    laureates_attrs(offset).each { |attrs| create_laureate(attrs) }
    schedule_next(offset)
  end

  def create_laureate(attrs)
    laureate = Laureate.create!(attrs.to_h)
    attrs.awards.each { |award_attrs| create_award(award_attrs, laureate) }
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
