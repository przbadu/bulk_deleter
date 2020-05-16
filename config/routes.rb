Rails.application.routes.draw do
  root to: 'application#index'

  # devise
  devise_for :users, only: :sessions

  # quickbooks
  get '/oauth2', to: 'sessions#oauth2'
  get '/oauth2/callback', to: 'sessions#oauth2_callback'

  # APIs
  namespace :api, defaults: { format: 'json' } do
    namespace :admins do
      as :user do
        delete 'sign_out', to: '/devise/sessions#destroy'
      end

      resources :qbo_accounts, only: :index
    end
  end

  # authenticated routes
  get '/admins', to: 'admins#index', as: :admins
  match "/admins/*path", to: "admins#index", format: false, via: :get
end
