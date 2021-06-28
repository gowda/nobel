# frozen_string_literal: true

shared_examples 'event' do |name|
  let!(:attrs) do
    {
      'id' => 'test id',
      name => {
        'date' => '1901-01-01',
        'place' => {
          'city' => {
            'en' => 'Test city'
          }
        }
      }
    }
  end

  describe "#{name}_date" do
    let!(:attr_name) { "#{name}_date" }

    context "when '#{name}' not present" do
      subject { described_class.parse(attrs.except(name)) }

      it 'returns nil' do
        expect(subject.send(attr_name)).to be_nil
      end
    end

    context "when '#{name}' present, but not date" do
      subject { described_class.parse(attrs.merge(name => attrs[name].except('date'))) }

      it 'returns nil' do
        expect(subject.send(attr_name)).to be_nil
      end
    end

    context "when '#{name}' present with date" do
      subject { described_class.parse(attrs) }

      it 'returns the date' do
        expect(subject.send(attr_name)).to eql('1901-01-01')
      end
    end
  end

  describe "#{name}_place" do
    let!(:attr_name) { "#{name}_place" }

    context "when '#{name}' not present" do
      subject { described_class.parse(attrs.except(name)) }

      it 'returns nil' do
        expect(subject.send(attr_name)).to be_nil
      end
    end

    context "when '#{name}' present, but not place" do
      subject { described_class.parse(attrs.merge(name => attrs[name].except('place'))) }

      it 'returns nil' do
        expect(subject.send(attr_name)).to be_nil
      end
    end

    context "when '#{name}' present with date" do
      let!(:location) { NobelPrize::Location.parse(attrs[name]['place']) }

      subject { described_class.parse(attrs) }

      it 'returns the location' do
        expect(subject.send(attr_name).city).to equal(location.city)
      end
    end
  end
end
