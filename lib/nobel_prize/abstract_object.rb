# frozen_string_literal: true

module NobelPrize
  class AbstractObject
    attr_reader :source

    def initialize(attrs)
      @source = attrs
    end

    def self.parse(attrs)
      raise ArgumentError, 'blank attributes hash' if attrs.blank?

      new(attrs)
    end
  end
end
