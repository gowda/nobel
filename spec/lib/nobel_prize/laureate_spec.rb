# frozen_string_literal: true

require_relative 'abstract_object_example'

describe NobelPrize::Laureate do
  let!(:attrs) do
    {
      'id' => 'test id',
      'links' => [
        {
          'rel' => 'laureate',
          'href' => 'http://api.example.org/laureate/test-id'
        },
        {
          'rel' => 'external',
          'href' => 'http://example.org/laureate/test-id'
        }
      ],
      'wikipedia' => {
        'slug' => 'test-slug',
        'english' => 'http://example.org/wiki/test-slug'
      }
    }
  end

  it_behaves_like 'abstract object'

  context 'when person' do
    subject(:laureate) { described_class.parse({ 'knownName' => { 'en' => 'Test laureate' } }) }

    it { is_expected.to respond_to(:first_name) }
    it { is_expected.to respond_to(:last_name) }
    it { is_expected.to respond_to(:gender) }
    it { is_expected.to respond_to(:birth_date) }
    it { is_expected.to respond_to(:birth_place) }
    it { is_expected.to respond_to(:death_date) }
    it { is_expected.to respond_to(:death_place) }
  end

  context 'when org' do
    subject(:laureate) { described_class.parse({ 'orgName' => { 'en' => 'Test laureate' } }) }

    it { is_expected.to respond_to(:native_name) }
    it { is_expected.to respond_to(:acronym) }
    it { is_expected.to respond_to(:founded_date) }
    it { is_expected.to respond_to(:founded_place) }
  end

  describe 'link' do
    context 'when "links" present' do
      subject(:laureate) { described_class.parse(attrs) }

      it 'returns the link' do
        expect(laureate.link).to eql('http://example.org/laureate/test-id')
      end
    end

    context 'when "links" not present' do
      subject(:laureate) { described_class.parse(attrs.except('links')) }

      it 'returns nil' do
        expect(laureate.link).to be_nil
      end
    end

    context 'when "links" present, but external not present' do
      subject(:laureate) { described_class.parse(attrs.merge('links' => [attrs['links'][0]])) }

      it 'returns nil' do
        expect(laureate.link).to be_nil
      end
    end
  end

  describe 'wiki_link' do
    context 'when "wikipedia" present' do
      subject(:laureate) { described_class.parse(attrs) }

      it 'returns the link' do
        expect(laureate.wiki_link).to eql('http://example.org/wiki/test-slug')
      end
    end

    context 'when "wikipedia" not present' do
      subject(:laureate) { described_class.parse(attrs.except('wikipedia')) }

      it 'returns nil' do
        expect(laureate.wiki_link).to be_nil
      end
    end
  end
end
