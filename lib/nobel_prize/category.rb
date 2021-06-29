# frozen_string_literal: true

module NobelPrize
  class Category < AbstractObject
    def name
      source['categoryFullName']['en']
    end

    def short
      source['category']['en']
    end

    def to_h
      {
        name: name,
        short: short
      }
    end

    def inspect
      "<#{self.class.name}:0x#{object_id.to_s(16)} short=\"#{short}\">"
    end
  end
end
