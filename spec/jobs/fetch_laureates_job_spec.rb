# frozen_string_literal: true

describe FetchLaureatesJob do
  context 'when network errors out' do
    pending 'it is rescheduled'
  end

  context 'when response contains content' do
    context 'when prizes not present' do
      pending 'it schedules fetch prizes job with flag to resume later'
    end

    pending 'it creates laureates'
    pending 'it schedules the next job'
  end

  context 'when response does not contain content' do
    pending 'it does not schedule the next job'
  end
end
