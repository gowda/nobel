# frozen_string_literal: true

describe NobelPrize::Client do
  describe 'prizes' do
    let!(:url) { 'https://api.nobelprize.org/2.1/nobelPrizes' }

    context 'when network errors out' do
      before do
        stub_request(:get, url)
          .with(query: { limit: 25, offset: 0 })
          .to_raise(Faraday::ConnectionFailed.new('Network error'))
      end

      it 'raises network error' do
        expect { described_class.prizes }.to raise_error(NobelPrize::NetworkError)
      end
    end

    context 'when network times out' do
      before do
        stub_request(:get, url)
          .with(query: { limit: 25, offset: 0 })
          .to_timeout
      end

      it 'raises network error' do
        expect { described_class.prizes }.to raise_error(NobelPrize::NetworkError)
      end
    end
  end

  describe 'laureates' do
    let!(:url) { 'https://api.nobelprize.org/2.1/laureates' }

    context 'when network errors out' do
      before do
        stub_request(:get, url)
          .with(query: { limit: 25, offset: 0 })
          .to_raise(Faraday::ConnectionFailed.new('Network error'))
      end

      it 'raises network error' do
        expect { described_class.laureates }.to raise_error(NobelPrize::NetworkError)
      end
    end

    context 'when network times out' do
      before do
        stub_request(:get, url)
          .with(query: { limit: 25, offset: 0 })
          .to_timeout
      end

      it 'raises network error' do
        expect { described_class.laureates }.to raise_error(NobelPrize::NetworkError)
      end
    end
  end
end
