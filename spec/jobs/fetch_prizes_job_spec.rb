# frozen_string_literal: true

describe FetchPrizesJob do
  context 'when network errors out' do
    pending 'it is rescheduled'
  end

  context 'when response contains content' do
    pending 'it creates prizes'
    pending 'it schedules the next job'
  end

  context 'when response does not contain content' do
    pending 'it does not schedule the next job'

    context 'when called with flag to resume fetch laureates job' do
      pending 'it schedules fetch laureates job'
    end
  end
end
