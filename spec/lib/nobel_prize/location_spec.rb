# frozen_string_literal: true

require_relative 'abstract_object_example'

describe NobelPrize::Location do
  let(:attrs) do
    {
      'city' => { 'en' => 'Test city' },
      'cityNow' => { 'en' => 'Test city now', 'sameAs' => ['http://example.org/test-city'] },
      'country' => { 'en' => 'Test country' },
      'countryNow' => { 'en' => 'Test country now' },
      'continent' => { 'en' => 'Test continent' },
      'locationString' => { 'en' => 'Test location name' }
    }
  end

  it_behaves_like 'abstract object'

  describe 'city' do
    context 'when "cityNow" is present' do
      subject(:location) { described_class.parse(attrs) }

      it 'returns cityNow' do
        expect(location.city).to eql('Test city now')
      end
    end

    context 'when "cityNow" is not present' do
      subject(:location) { described_class.parse(attrs.except('cityNow')) }

      it 'returns city' do
        expect(location.city).to eql('Test city')
      end
    end
  end

  describe 'country' do
    context 'when "countryNow" is present' do
      subject(:location) { described_class.parse(attrs) }

      it 'returns countryNow' do
        expect(location.country).to eql('Test country now')
      end
    end

    context 'when "countryNow" is not present' do
      subject(:location) { described_class.parse(attrs.except('countryNow')) }

      it 'returns country' do
        expect(location.country).to eql('Test country')
      end
    end
  end

  describe 'continent' do
    context 'when present' do
      subject(:location) { described_class.parse(attrs) }

      it 'returns value' do
        expect(location.continent).to eql('Test continent')
      end
    end

    context 'when not present' do
      subject(:location) { described_class.parse(attrs.except('continent')) }

      it 'returns nil' do
        expect(location.continent).to be_nil
      end
    end
  end

  describe 'name' do
    context 'when present' do
      subject(:location) { described_class.parse(attrs) }

      it 'returns value' do
        expect(location.name).to eql('Test location name')
      end
    end

    context 'when not present' do
      subject(:location) { described_class.parse(attrs.except('locationString')) }

      it 'returns "city, country"' do
        expect(location.name).to eql('Test city now, Test country now')
      end
    end
  end

  describe 'wiki_link' do
    context 'when present' do
      subject(:location) { described_class.parse(attrs) }

      it 'returns value' do
        expect(location.wiki_link).to eql('http://example.org/test-city')
      end
    end

    context 'when "cityNow" not present' do
      subject(:location) { described_class.parse(attrs.except('cityNow')) }

      it 'returns nil' do
        expect(location.wiki_link).to be_nil
      end
    end
  end
end
