# frozen_string_literal: true

class Prize < ApplicationRecord
  validates :year,
            presence: true,
            allow_blank: false,
            uniqueness: { scope: :category }

  validates :amount, numericality: { only_integer: true }
  validates :link, presence: true, allow_nil: true

  belongs_to :category

  has_many :awards, dependent: :destroy
  has_many :laureates, through: :awards
end
