# frozen_string_literal: true

module NobelPrize
  class Location < AbstractObject
    def city_then
      return nil if source['city'].nil?

      source['city']['en']
    end

    def country_then
      return nil if source['country'].nil?

      source['country']['en']
    end

    def city
      return city_then if source['cityNow'].nil?

      source['cityNow']['en']
    end

    def country
      return country_then if source['countryNow'].nil?

      source['countryNow']['en']
    end

    def continent
      return nil if source['continent'].nil?

      source['continent']['en']
    end

    def name
      return "#{city}, #{country}" if source['locationString'].nil?

      source['locationString']['en']
    end

    def wiki_link
      return nil if source['cityNow'].nil? || source['cityNow']['sameAs'].nil?

      source['cityNow']['sameAs'].last
    end

    def to_h
      {
        name: name,
        city: city,
        city_then: city_then,
        country: country,
        country_then: country_then,
        continent: continent,
        wiki_link: wiki_link
      }
    end

    def inspect
      "<#{self.class.name}:0x#{object_id.to_s(16)} name=\"#{name}\">"
    end
  end
end
