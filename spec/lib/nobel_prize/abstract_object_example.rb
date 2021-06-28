# frozen_string_literal: true

shared_examples 'abstract object' do
  describe '#parse' do
    context 'when attrs is nil' do
      it 'raises error' do
        expect { described_class.parse(nil) }.to raise_error(ArgumentError)
      end
    end

    context 'when attrs are blank' do
      it 'raises error' do
        expect { described_class.parse({}) }.to raise_error(ArgumentError)
      end
    end
  end
end
