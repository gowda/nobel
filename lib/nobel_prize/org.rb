# frozen_string_literal: true

module NobelPrize
  class Org < AbstractObject
    ATTRIBUTES = %w[name native_name acronym founded_date founded_place].freeze

    def name
      source['orgName']['en']
    end

    def native_name
      source['nativeName']
    end

    def acronym
      source['acronym']
    end

    def founded_date
      return nil if source['founded'].nil?

      source['founded']['date']
    end

    def founded_place
      return nil if source['founded'].nil? || source['founded']['place'].nil?

      Location.parse(source['founded']['place'])
    end

    def to_h
      {
        native_name: native_name,
        acronym: acronym,
        founded_date_string: founded_date
      }
    end
  end
end
