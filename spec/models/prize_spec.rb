# frozen_string_literal: true

describe Prize, type: :model do
  subject(:prize) do
    described_class.new(
      year: '2020',
      amount: 420_420,
      link: 'http://example.org/nobel/2020',
      category: category
    )
  end

  let!(:category) { Category.create!(name: 'Test category', short: 'Test') }

  it { is_expected.to respond_to(:year) }
  it { is_expected.to respond_to(:amount) }
  it { is_expected.to respond_to(:link) }

  describe 'year' do
    context 'when blank' do
      before { prize.year = '' }

      it { is_expected.not_to be_valid }
    end

    context 'when nil' do
      before { prize.year = nil }

      it { is_expected.not_to be_valid }
    end

    context 'when year is not unique' do
      subject do
        described_class.new(
          year: '2020',
          amount: 420_420,
          link: 'http://example.org/nobel/2020',
          category: category
        )
      end

      before { prize.save! }

      it { is_expected.not_to be_valid }
    end
  end

  describe 'amount' do
    context 'when blank' do
      before { prize.amount = '' }

      it { is_expected.not_to be_valid }
    end

    context 'when nil' do
      before { prize.amount = nil }

      it { is_expected.not_to be_valid }
    end

    context 'when floating point' do
      before { prize.amount = 240_240.24 }

      it { is_expected.not_to be_valid }
    end
  end

  describe 'link' do
    context 'when blank' do
      before { prize.link = '' }

      it { is_expected.not_to be_valid }
    end

    context 'when nil' do
      before { prize.link = nil }

      it { is_expected.to be_valid }
    end
  end

  describe 'category' do
    context 'when nil' do
      before { prize.category_id = nil }

      it { is_expected.not_to be_valid }
    end
  end

  describe 'laureates' do
    before { prize.save! }

    context 'when none present' do
      it 'is empty' do
        expect(prize.laureates).to be_empty
      end
    end

    context 'when present' do
      before do
        laureate = Laureate.create!(
          remote_id: 'test_id',
          name: 'Test laureate',
          link: 'http://example.org/nobel/test-laureate',
          person: true
        )
        Award.create!(
          motivation: 'Test motivation',
          prize: prize,
          laureate: laureate
        )
      end

      it 'is not empty' do
        expect(prize.laureates).not_to be_empty
      end
    end
  end
end
