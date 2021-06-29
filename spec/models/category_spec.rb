# frozen_string_literal: true

describe Category, type: :model do
  subject(:category) { described_class.new(name: 'Test category', short: 'Test') }

  it { is_expected.to respond_to(:name) }
  it { is_expected.to respond_to(:short) }
  it { is_expected.to be_valid }

  describe 'name' do
    context 'when blank' do
      before { category.name = '' }

      it { is_expected.not_to be_valid }
    end

    context 'when nil' do
      before { category.name = nil }

      it { is_expected.not_to be_valid }
    end
  end

  describe 'short' do
    context 'when blank' do
      before { category.short = '' }

      it { is_expected.not_to be_valid }
    end

    context 'when nil' do
      before { category.short = nil }

      it { is_expected.not_to be_valid }
    end
  end

  describe 'id' do
    before { category.save }

    it 'sets id to downcased short' do
      expect(category.id).to eql(category.short.downcase)
    end
  end
end
