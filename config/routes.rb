Rails.application.routes.draw do
  devise_for :users, only: :sessions
  get '/oauth2', to: 'sessions#oauth2'
  get '/oauth2/callback', to: 'sessions#oauth2_callback'
  root to: 'application#index'

  get '/admin', to: 'admins#index', as: :admins
end
