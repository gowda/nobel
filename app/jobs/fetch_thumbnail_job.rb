# frozen_string_literal: true

class FetchThumbnailJob < ApplicationJob
  def perform(id)
    laureate(id).update(thumbnail_url: thumbnail_url(id))
  end

  def thumbnail_url(id)
    @thumbnail_url ||= NobelPrize::Client.thumbnail(id)
  end

  def laureate(id)
    @laureate ||= Laureate.find_by(remote_id: id)
  end
end
