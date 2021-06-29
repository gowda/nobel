# frozen_string_literal: true

describe Award, type: :model do
  subject(:award) do
    described_class.new(
      motivation: 'Test motivation',
      portion: '1/42',
      sort_order: 1,
      prize: prize,
      laureate: laureate
    )
  end

  let!(:category) { Category.create!(name: 'Test category', short: 'Test') }
  let!(:prize) do
    Prize.create!(
      year: '2020',
      amount: 420_420,
      link: 'http://example.org/nobel/2020',
      category: category
    )
  end
  let!(:laureate) do
    Laureate.create!(
      remote_id: 'test_id',
      name: 'Test laureate',
      link: 'http://example.org/nobel/test-laureate',
      person: true
    )
  end

  it { is_expected.to respond_to(:motivation) }
  it { is_expected.to respond_to(:portion) }
  it { is_expected.to respond_to(:sort_order) }

  describe 'motivation' do
    context 'when blank' do
      before { award.motivation = '' }

      it { is_expected.not_to be_valid }
    end

    context 'when nil' do
      before { award.motivation = nil }

      it { is_expected.not_to be_valid }
    end
  end

  describe 'portion' do
    context 'when blank' do
      before do
        award.portion = ''
        award.save!
        award.reload
      end

      it 'defaults to 1' do
        expect(award.portion).to eql('1')
      end
    end

    context 'when nil' do
      before do
        award.portion = nil
        award.save!
        award.reload
      end

      it 'defaults to 1' do
        expect(award.portion).to eql('1')
      end
    end
  end

  describe 'sort_order' do
    context 'when blank' do
      before do
        award.sort_order = ''
        award.save!
        award.reload
      end

      it 'defaults to 1' do
        expect(award.sort_order).to be(1)
      end
    end

    context 'when nil' do
      before do
        award.sort_order = nil
        award.save!
        award.reload
      end

      it 'defaults to 1' do
        expect(award.sort_order).to be(1)
      end
    end
  end

  describe 'prize' do
    before { award.prize = nil }

    it { is_expected.not_to be_valid }
  end

  describe 'laureate' do
    before { award.laureate = nil }

    it { is_expected.not_to be_valid }
  end
end
