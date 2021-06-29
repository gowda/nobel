# frozen_string_literal: true

class Laureate < ApplicationRecord
  validates :remote_id, presence: true, allow_blank: false, uniqueness: true
  validates :name, presence: true, allow_blank: false
  validates :link, presence: true, allow_nil: true
  validate :org_or_person_is_true
  validate :org_and_person_not_false

  has_many :awards, dependent: :destroy
  has_many :prizes, through: :awards

  private

  def org_or_person_is_true
    errors.add(:base, 'both org & person cannot be true') if person && org
  end

  def org_and_person_not_false
    errors.add(:base, 'both org & person cannot be nil') if person.nil? && org.nil?

    errors.add(:base, 'both org & person cannot be false') if !person && !org
  end
end
