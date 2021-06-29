# frozen_string_literal: true

require_relative 'abstract_object_example'

describe NobelPrize::Affiliation do
  it_behaves_like 'abstract object'

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

  describe 'name' do
    context 'when not present' do
      subject { NobelPrize::Affiliation.parse(attrs.except('nameNow')) }

      it 'returns name_then' do
        expect(subject.name).to eql('Test university')
      end
    end

    context 'when present' do
      subject { NobelPrize::Affiliation.parse(attrs) }

      it 'returns the name' do
        expect(subject.name).to eql('Test university now')
      end
    end
  end
end
