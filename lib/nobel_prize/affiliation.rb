# frozen_string_literal: true

module NobelPrize
  class Affiliation < AbstractObject
    def name_then
      source['name']['en']
    end

    def name
      return name_then if source['nameNow'].nil?

      source['nameNow']['en']
    end

    def place
      Location.parse(source)
    end

    def inspect
      "<#{self.class.name}:0x#{object_id.to_s(16)} name=\"#{name}\" place=\"#{place.name}\">"
    end
  end
end
