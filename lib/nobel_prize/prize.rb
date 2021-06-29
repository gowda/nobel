# frozen_string_literal: true

module NobelPrize
  class Prize < AbstractObject
    def year
      source['awardYear']
    end

    def category
      Category.parse(source)
    end

    def amount
      source['prizeAmount']
    end

    def link
      return nil if source['links'].empty?

      source['links'][0]['href']
    end

    def to_h
      {
        year: year,
        amount: year,
        link: link
      }
    end

    def inspect
      "<#{self.class.name}:0x#{object_id.to_s(16)} year=\"#{year}\" category=\"#{category.short}\">"
    end
  end
end
