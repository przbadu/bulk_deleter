Rails.application.routes.draw do
  root to: 'application#index'

  # devise
  devise_for :users, only: :sessions

  # quickbooks
  get '/oauth2', to: 'sessions#oauth2'
  get '/oauth2/callback', to: 'sessions#oauth2_callback'

  # authenticated routes
  get '/admins', to: 'admins#index', as: :admins
  match "/admins/*path", to: "admins#index", format: false, via: :get

  namespace :api, :defaults => { :format => 'json' } do
    resources :customers, only: [:index, :destroy]
  end
end
