# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Prize, type: :model do
  before do
    category = Category.create!(name: 'Test category', short: 'Test')
    @prize = Prize.new(
      year: '2020',
      amount: 420_420,
      link: 'http://example.org/nobel/2020',
      category: category
    )
  end

  subject { @prize }

  it { should respond_to(:year) }
  it { should respond_to(:amount) }
  it { should respond_to(:link) }

  describe 'year' do
    context 'when blank' do
      before { @prize.year = '' }

      it { should_not be_valid }
    end

    context 'when nil' do
      before { @prize.year = nil }

      it { should_not be_valid }
    end
  end

  describe 'amount' do
    context 'when blank' do
      before { @prize.amount = '' }

      it { should_not be_valid }
    end

    context 'when nil' do
      before { @prize.amount = nil }

      it { should_not be_valid }
    end

    context 'when floating point' do
      before { @prize.amount = 240_240.24 }

      it { should_not be_valid }
    end
  end

  describe 'link' do
    context 'when blank' do
      before { @prize.link = '' }

      it { should_not be_valid }
    end

    context 'when nil' do
      before { @prize.link = nil }

      it { should be_valid }
    end
  end

  describe 'category' do
    context 'when nil' do
      before { @prize.category_id = nil }

      it { should_not be_valid }
    end
  end
end
