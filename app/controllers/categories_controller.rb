# frozen_string_literal: true

class CategoriesController < ApplicationController
  def index
    @categories = Category.joins(:prizes)
      .select('categories.*, SUM(prizes.laureate_count) as laureate_count')
      .group('categories.cid').to_a
  end
end
