# frozen_string_literal: true

class FetchPrizesJob < ApplicationJob
  def perform(offset = 0)
    return if prizes_attrs(offset).empty?

    prizes_attrs(offset).each { |attrs| create_prize(attrs) }
    schedule_next(offset)
  end

  def create_prize(attrs)
    category = Category.find_or_create_by!(attrs.category.to_h)

    Prize.create!(**attrs.to_h, category: category)
  end

  def prizes_attrs(offset)
    @prizes_attrs ||= NobelPrize::Client.prizes(offset)
  end

  def schedule_next(offset)
    FetchPrizesJob.perform_later(offset + prizes_attrs(offset).length)
  end
end
