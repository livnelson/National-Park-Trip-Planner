Rails.application.routes.draw do
  resources :users, only: [:show, :index, :create]
  get "/me", to: "users#show"
  post "/login", to: "sessions#login"
  post "/create", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/newtrip", to: "trips#create"
end