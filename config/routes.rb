Rails.application.routes.draw do
  devise_for :users, only: :sessions
  get '/oauth2', to: 'sessions#oauth2'
  get '/oauth2/callback', to: 'sessions#oauth2_callback'
  root to: 'application#index'

  get '/admins', to: 'admins#index', as: :admins
  match "/admins/*path", to: "admins#index", format: false, via: :get

  localized do
    namespace :api, :defaults => { :format => 'json' } do
      resources :customers, only: [:index, :destroy]
    end
  end
end
