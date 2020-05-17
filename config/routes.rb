Rails.application.routes.draw do
  root to: 'application#index'

  # devise
  devise_for :users, only: :sessions

  # quickbooks
  get '/oauth2', to: 'sessions#oauth2'
  get '/oauth2/callback', to: 'sessions#oauth2_callback'

  # APIs
  namespace :api do
    namespace :admins do
      as :user do
        delete 'sign_out', to: '/devise/sessions#destroy'
      end

      put 'switch_account/:id', to: 'qbo_accounts#switch_account'
      resources :qbo_accounts, only: :index
      resources :accounts, only: [:index] do
        collection do
          post :bulk_delete
        end
      end
    end
  end

  # authenticated routes
  get '/admins', to: 'admins#index', as: :admins
  match "/admins/*path", to: "admins#index", format: false, via: :get
end
