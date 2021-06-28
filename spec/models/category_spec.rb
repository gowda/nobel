# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Category, type: :model do
  before do
    @category = Category.new(name: 'Test category', short: 'Test')
  end

  subject { @category }

  it { should respond_to(:name) }
  it { should respond_to(:short) }
  it { should be_valid }

  describe 'name' do
    context 'when blank' do
      before { @category.name = '' }

      it { should_not be_valid }
    end

    context 'when nil' do
      before { @category.name = nil }

      it { should_not be_valid }
    end
  end

  describe 'short' do
    context 'when blank' do
      before { @category.short = '' }

      it { should_not be_valid }
    end

    context 'when nil' do
      before { @category.short = nil }

      it { should_not be_valid }
    end
  end

  describe 'id' do
    before { @category.save }

    it 'sets id to downcased short' do
      expect(@category.id).to eql(@category.short.downcase)
    end
  end
end
