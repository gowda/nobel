# frozen_string_literal: true

require_relative 'abstract_object_example'
require_relative 'event_example'

describe NobelPrize::Person do
  it_behaves_like 'abstract object'

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

  describe 'first_name' do
    context 'when present' do
      subject { described_class.parse(attrs) }

      it 'returns the first_name' do
        expect(subject.first_name).to eql('Test first name')
      end
    end

    context 'when not present' do
      subject { described_class.parse(attrs.except('givenName')) }

      it 'returns nil' do
        expect(subject.first_name).to be_nil
      end
    end
  end

  describe 'last_name' do
    context 'when present' do
      subject { described_class.parse(attrs) }

      it 'returns the last_name' do
        expect(subject.last_name).to eql('Test last name')
      end
    end

    context 'when not present' do
      subject { described_class.parse(attrs.except('familyName')) }

      it 'returns nil' do
        expect(subject.last_name).to be_nil
      end
    end
  end

  describe 'gender' do
    context 'when present' do
      subject { described_class.parse(attrs) }

      it 'returns the gender' do
        expect(subject.gender).to eql('male')
      end
    end

    context 'when not present' do
      subject { described_class.parse(attrs.except('gender')) }

      it 'returns nil' do
        expect(subject.gender).to be_nil
      end
    end
  end

  it_behaves_like 'event', 'birth'
  it_behaves_like 'event', 'death'
end
