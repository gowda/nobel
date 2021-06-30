# frozen_string_literal: true

class FetchThumbnailsJob < ApplicationJob
  def perform
    Laureate.where(thumbnail_url: nil).find_each do |laureate|
      FetchThumbnailJob.perform_later(laureate.remote_id)
    end
  end
end
