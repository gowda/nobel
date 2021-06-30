# frozen_string_literal: true

class Org < Laureate
  validates :founded_date_string, presence: true, allow_blank: true, if: :org?

  belongs_to :founded_place, class_name: 'Location', optional: true
end
