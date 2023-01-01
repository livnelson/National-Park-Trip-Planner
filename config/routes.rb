Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  resources :trips, only: [:index, :show, :create, :update, :destroy]
  get "/users", to: "users#index"
  get "/hello", to: "application#hello_world"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  post "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#is_logged_in?"
end