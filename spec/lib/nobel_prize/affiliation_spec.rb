# frozen_string_literal: true

require_relative 'abstract_object_example'

describe NobelPrize::Affiliation do
  let!(:attrs) do
    {
      'name' => {
        'en' => 'Test university'
      },
      'nameNow' => {
        'en' => 'Test university now'
      },
      'cityNow' => {
        'en' => 'Test city'
      },
      'countryNow' => {
        'en' => 'Test country'
      }
    }
  end

  it_behaves_like 'abstract object'

  describe 'name' do
    context 'when not present' do
      subject(:affiliation) { described_class.parse(attrs.except('nameNow')) }

      it 'returns name_then' do
        expect(affiliation.name).to eql('Test university')
      end
    end

    context 'when present' do
      subject(:affiliation) { described_class.parse(attrs) }

      it 'returns the name' do
        expect(affiliation.name).to eql('Test university now')
      end
    end
  end
end
