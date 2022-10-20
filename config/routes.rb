Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :teams, :comments, :team_comments, :rankings
  resources :characters, only: [:index, :show]
  resources :ranking, only: [:create, :update]
  resources :users, only: [:index, :show, :create, :delete]
end
