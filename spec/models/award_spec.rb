# frozen_string_literal: true

describe Award, type: :model do
  before do
    category = Category.create!(name: 'Test category', short: 'Test')
    prize = Prize.create!(
      year: '2020',
      amount: 420_420,
      link: 'http://example.org/nobel/2020',
      category: category
    )
    laureate = Laureate.create!(
      remote_id: 'test_id',
      name: 'Test laureate',
      link: 'http://example.org/nobel/test-laureate',
      person: true
    )
    @award = Award.new(
      motivation: 'Test motivation',
      portion: '1/42',
      sort_order: 1,
      prize: prize,
      laureate: laureate
    )
  end

  subject { @award }

  it { should respond_to(:motivation) }
  it { should respond_to(:portion) }
  it { should respond_to(:sort_order) }

  describe 'motivation' do
    context 'when blank' do
      before { subject.motivation = '' }

      it { should_not be_valid }
    end

    context 'when nil' do
      before { subject.motivation = nil }

      it { should_not be_valid }
    end
  end

  describe 'portion' do
    context 'when blank' do
      before do
        subject.portion = ''
        subject.save!
        subject.reload
      end

      it 'defaults to 1' do
        expect(subject.portion).to eql('1')
      end
    end

    context 'when nil' do
      before do
        subject.portion = nil
        subject.save!
        subject.reload
      end

      it 'defaults to 1' do
        expect(subject.portion).to eql('1')
      end
    end
  end

  describe 'sort_order' do
    context 'when blank' do
      before do
        subject.sort_order = ''
        subject.save!
        subject.reload
      end

      it 'defaults to 1' do
        expect(subject.sort_order).to eql(1)
      end
    end

    context 'when nil' do
      before do
        subject.sort_order = nil
        subject.save!
        subject.reload
      end

      it 'defaults to 1' do
        expect(subject.sort_order).to eql(1)
      end
    end
  end

  describe 'prize' do
    before { subject.prize = nil }

    it { should_not be_valid }
  end

  describe 'laureate' do
    before { subject.laureate = nil }

    it { should_not be_valid }
  end
end
