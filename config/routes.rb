Rails.application.routes.draw do
  
  resources :lists, only: [:index, :show, :destroy, :create, :update] do 
    post :add_item
    delete :remove_item
  end
  resources :items, only: [:index, :show, :create, :destroy, :update]
  resources :users, only: [:create]

  #login route
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post '/signup', to: 'users#create'



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
