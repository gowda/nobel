# frozen_string_literal: true

class Person < Laureate
  validates :birth_date_string, presence: true, allow_blank: true, if: :person?
  validates :death_date_string, presence: true, allow_blank: true, if: :person?

  belongs_to :birth_place, class_name: 'Location', optional: true
  belongs_to :death_place, class_name: 'Location', optional: true
end
