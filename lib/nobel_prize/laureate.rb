# frozen_string_literal: true

module NobelPrize
  class Laureate < AbstractObject
    def id
      source['id']
    end

    def link
      return nil if source['links'].blank?

      source['links'].find { |l| l['rel'] == 'external' }&.[]('href')
    end

    def wiki_link
      return nil if source['wikipedia'].blank?

      source['wikipedia']['english']
    end

    def org?
      !source['orgName'].nil?
    end

    def person?
      !source['knownName'].nil?
    end

    def org
      @org ||= Org.parse(source)
    end

    def person
      @person ||= Person.parse(source)
    end

    def respond_to_missing?(name, _include_private)
      return Org::ATTRIBUTES.include?(name.to_s) if org?

      Person::ATTRIBUTES.include?(name.to_s)
    end

    def method_missing(name, *_args)
      return org.send(name) if org?

      person.send(name)
    end

    def inspect
      "<#{self.class.name}:0x#{object_id.to_s(16)} #{org? ? 'org' : 'person'} name=\"#{name}\">"
    end
  end
end
