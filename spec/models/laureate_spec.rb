# frozen_string_literal: true

describe Laureate, type: :model do
  subject(:laureate) { described_class.new(attrs) }

  let!(:attrs) do
    {
      remote_id: 'test_id',
      name: 'Test laureate',
      link: 'http://example.org/nobel/test-laureate',
      person: true
    }
  end

  it { is_expected.to respond_to(:remote_id) }
  it { is_expected.to respond_to(:name) }
  it { is_expected.to respond_to(:link) }
  it { is_expected.to respond_to(:person) }

  describe 'remote_id' do
    context 'when blank' do
      before { laureate.remote_id = '' }

      it { is_expected.not_to be_valid }
    end

    context 'when nil' do
      before { laureate.remote_id = nil }

      it { is_expected.not_to be_valid }
    end

    context 'when already exists' do
      subject { described_class.new(attrs) }

      before { laureate.save! }

      it { is_expected.not_to be_valid }
    end
  end

  describe 'person & org flag' do
    context 'when both nil' do
      before do
        laureate.person = nil
        laureate.org = nil
      end

      it { is_expected.not_to be_valid }
    end

    context 'when both true' do
      before do
        laureate.person = true
        laureate.org = true
      end

      it { is_expected.not_to be_valid }
    end

    context 'when both false' do
      before do
        laureate.person = false
        laureate.org = false
      end

      it { is_expected.not_to be_valid }
    end
  end

  describe 'prize' do
    context 'when none present' do
      it 'is empty' do
        expect(laureate.prizes).to be_empty
      end
    end

    context 'when present' do
      before do
        category = Category.create!(name: 'Test category', short: 'Test')
        prize = Prize.new(
          year: '2020',
          amount: 420_420,
          link: 'http://example.org/nobel/2020',
          category: category
        )
        Award.create!(
          motivation: 'Test motivation',
          prize: prize,
          laureate: laureate
        )
      end

      it 'is not empty' do
        expect(laureate.prizes).not_to be_empty
      end
    end
  end
end
