# frozen_string_literal: true

class Award < ApplicationRecord
  validates :motivation, presence: true, allow_blank: false
  validates :portion, format: { with: %r{\A\d+(/\d+)?\z} }, allow_blank: true
  validates :sort_order, numericality: { only_integer: true }, allow_blank: true

  belongs_to :laureate, counter_cache: :prize_count
  belongs_to :prize, counter_cache: :laureate_count

  before_save :set_default_portion, if: -> { portion.blank? }
  before_save :set_default_sort_order, if: -> { sort_order.blank? }

  private

  def set_default_portion
    self.portion = 1
  end

  def set_default_sort_order
    self.sort_order = 1
  end
end
