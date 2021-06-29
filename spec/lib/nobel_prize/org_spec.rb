# frozen_string_literal: true

require_relative 'abstract_object_example'
require_relative 'event_example'

describe NobelPrize::Org do
  let!(:attrs) do
    {
      'orgName' => {
        'en' => 'Test organization'
      },
      'nativeName' => 'Test organization native name',
      'acronym' => 'TONN'
    }
  end

  it_behaves_like 'abstract object'

  describe 'native_name' do
    context 'when present' do
      subject(:org) { described_class.parse(attrs) }

      it 'returns the native_name' do
        expect(org.native_name).to eql('Test organization native name')
      end
    end

    context 'when not present' do
      subject(:org) { described_class.parse(attrs.except('nativeName')) }

      it 'returns nil' do
        expect(org.native_name).to be_nil
      end
    end
  end

  describe 'acronym' do
    context 'when present' do
      subject(:org) { described_class.parse(attrs) }

      it 'returns the acronym' do
        expect(org.acronym).to eql('TONN')
      end
    end

    context 'when not present' do
      subject(:org) { described_class.parse(attrs.except('acronym')) }

      it 'returns nil' do
        expect(org.acronym).to be_nil
      end
    end
  end

  it_behaves_like 'event', 'founded'
end
