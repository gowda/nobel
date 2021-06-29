# frozen_string_literal: true

describe Laureate, type: :model do
  let!(:attrs) do
    {
      remote_id: 'test_id',
      name: 'Test laureate',
      link: 'http://example.org/nobel/test-laureate',
      person: true
    }
  end

  before do
    @laureate = described_class.new(attrs)
  end

  subject { @laureate }

  it { should respond_to(:remote_id) }
  it { should respond_to(:name) }
  it { should respond_to(:link) }
  it { should respond_to(:person) }

  describe 'remote_id' do
    context 'when blank' do
      before { subject.remote_id = '' }

      it { should_not be_valid }
    end

    context 'when nil' do
      before { subject.remote_id = nil }

      it { should_not be_valid }
    end

    context 'uniqueness' do
      before do
        @laureate.save!
        @laureate = described_class.new(attrs)
      end

      it { should_not be_valid }
    end
  end

  describe 'person & org flag' do
    context 'when both nil' do
      before do
        subject.person = nil
        subject.org = nil
      end

      it { should_not be_valid }
    end

    context 'when both true' do
      before do
        subject.person = true
        subject.org = true
      end

      it { should_not be_valid }
    end

    context 'when both false' do
      before do
        subject.person = false
        subject.org = false
      end

      it { should_not be_valid }
    end
  end

  describe 'prize' do
    context 'when none present' do
      it 'should be empty' do
        expect(subject.prizes).to be_empty
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
          laureate: @laureate
        )
      end

      it 'should not be empty' do
        expect(subject.prizes).not_to be_empty
      end
    end
  end
end
