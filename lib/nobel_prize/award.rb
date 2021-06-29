# frozen_string_literal: true

module NobelPrize
  class Award < AbstractObject
    def prize
      Prize.parse(source)
    end

    def portion
      source['portion']
    end

    def sort_order
      source['sortOrder']
    end

    def status
      source['prizeStatus']
    end

    def motivation
      source['motivation']['en']
    end

    def affiliations
      source['affiliations'].map { |attrs| Affiliation.parse(attrs) }
    end

    def to_h
      {
        sort_order: sort_order,
        portion: portion,
        motivation: motivation
      }
    end

    def inspect
      "<#{self.class.name}:0x#{object_id.to_s(16)} year=\"#{prize.year}\" category=\"#{prize.category.short}\">"
    end
  end
end
