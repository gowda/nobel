# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      resources :categories, only: :index
      resources :laureates, only: :index
    end

    get '/status', to: 'status#index'
    post '/fetch', to: 'status#fetch'
  end
end
