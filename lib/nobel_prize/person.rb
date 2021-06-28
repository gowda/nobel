# frozen_string_literal: true

module NobelPrize
  class Person < AbstractObject
    ATTRIBUTES = %w[name first_name last_name gender birth_date birth_place death_date
                    death_place].freeze

    def name
      source['knownName']['en']
    end

    def first_name
      return nil if source['givenName'].nil?

      source['givenName']['en']
    end

    def last_name
      return nil if source['familyName'].nil?

      source['familyName']['en']
    end

    def gender
      source['gender']
    end

    def birth_date
      return nil if source['birth'].nil?

      source['birth']['date']
    end

    def birth_place
      return nil if source['birth'].nil? || source['birth']['place'].nil?

      Location.parse(source['birth']['place'])
    end

    def death_date
      return nil if source['death'].blank?

      source['death']['date']
    end

    def death_place
      return nil if source['death'].blank? || source['death']['place'].nil?

      Location.parse(source['death']['place'])
    end
  end
end
