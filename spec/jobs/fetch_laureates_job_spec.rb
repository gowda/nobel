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

    context 'when laureate has same birth & death place' do
      pending 'it creates a single location'
    end

    context 'when laureate has different birth & death place' do
      pending 'it creates two locations'
    end

    context 'when place is shared location for birth, death & founding of different laureates' do
      pending 'it creates a single location'
    end
  end

  context 'when response does not contain content' do
    pending 'it does not schedule the next job'
  end
end
