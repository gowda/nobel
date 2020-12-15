# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    get '/status', to: 'status#index'
    post '/fetch', to: 'status#fetch'
  end
end
