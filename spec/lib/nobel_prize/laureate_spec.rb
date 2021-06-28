# frozen_string_literal: true

require_relative 'abstract_object_example'

describe NobelPrize::Laureate do
  it_behaves_like 'abstract object'

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

  context 'when person' do
    subject { described_class.parse({ 'knownName' => { 'en' => 'Test laureate' } }) }

    it { should respond_to(:first_name) }
    it { should respond_to(:last_name) }
    it { should respond_to(:gender) }
    it { should respond_to(:birth_date) }
    it { should respond_to(:birth_place) }
    it { should respond_to(:death_date) }
    it { should respond_to(:death_place) }
  end

  context 'when org' do
    subject { described_class.parse({ 'orgName' => { 'en' => 'Test laureate' } }) }

    it { should respond_to(:native_name) }
    it { should respond_to(:acronym) }
    it { should respond_to(:founded_date) }
    it { should respond_to(:founded_place) }
  end

  describe 'link' do
    context 'when "links" present' do
      subject { described_class.parse(attrs) }

      it 'returns the link' do
        expect(subject.link).to eql('http://example.org/laureate/test-id')
      end
    end

    context 'when "links" not present' do
      subject { described_class.parse(attrs.except('links')) }

      it 'returns nil' do
        expect(subject.link).to be_nil
      end
    end

    context 'when "links" present, but external not present' do
      subject { described_class.parse(attrs.merge('links' => [attrs['links'][0]])) }

      it 'returns nil' do
        expect(subject.link).to be_nil
      end
    end
  end

  describe 'wiki_link' do
    context 'when "wikipedia" present' do
      subject { described_class.parse(attrs) }

      it 'returns the link' do
        expect(subject.wiki_link).to eql('http://example.org/wiki/test-slug')
      end
    end

    context 'when "wikipedia" not present' do
      subject { described_class.parse(attrs.except('wikipedia')) }

      it 'returns nil' do
        expect(subject.wiki_link).to be_nil
      end
    end
  end
end
