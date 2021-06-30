# frozen_string_literal: true

class LaureatesController < ApplicationController
  def index
    category = Category.find(params[:category])
    @laureates = category.laureates
  end
end
