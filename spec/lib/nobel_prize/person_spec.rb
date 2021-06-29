# frozen_string_literal: true

require_relative 'abstract_object_example'
require_relative 'event_example'

describe NobelPrize::Person do
  let!(:attrs) do
    {
      'knownName' => {
        'en' => 'Test known name'
      },
      'givenName' => {
        'en' => 'Test first name'
      },
      'familyName' => {
        'en' => 'Test last name'
      },
      'gender' => 'male'
    }
  end

  it_behaves_like 'abstract object'

  describe 'first_name' do
    context 'when present' do
      subject(:person) { described_class.parse(attrs) }

      it 'returns the first_name' do
        expect(person.first_name).to eql('Test first name')
      end
    end

    context 'when not present' do
      subject(:person) { described_class.parse(attrs.except('givenName')) }

      it 'returns nil' do
        expect(person.first_name).to be_nil
      end
    end
  end

  describe 'last_name' do
    context 'when present' do
      subject(:person) { described_class.parse(attrs) }

      it 'returns the last_name' do
        expect(person.last_name).to eql('Test last name')
      end
    end

    context 'when not present' do
      subject(:person) { described_class.parse(attrs.except('familyName')) }

      it 'returns nil' do
        expect(person.last_name).to be_nil
      end
    end
  end

  describe 'gender' do
    context 'when present' do
      subject(:person) { described_class.parse(attrs) }

      it 'returns the gender' do
        expect(person.gender).to eql('male')
      end
    end

    context 'when not present' do
      subject(:person) { described_class.parse(attrs.except('gender')) }

      it 'returns nil' do
        expect(person.gender).to be_nil
      end
    end
  end

  it_behaves_like 'event', 'birth'
  it_behaves_like 'event', 'death'
end
