Rails.application.routes.draw do
  resources :activities, only: [:show, :create]
  resources :users, only: [:show, :index, :create]
  resources :trips, only: [:destroy, :update]
  
  get "/me", to: "users#show"
  post "/login", to: "sessions#login"
  post "/create", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/newtrip", to: "trips#create"
  get "/alltrips", to: "trips#index"
  get "/trip", to: "activities#show"
  post "/newactivities", to: "activities#create"
end