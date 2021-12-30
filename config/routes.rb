Rails.application.routes.draw do
  
  resources :lists, only: [:index, :show, :destroy, :create, :update] do 
    post :add_item
    delete :remove_item
  end
  resources :items, only: [:index, :show, :create, :destroy, :update]
  resources :users, only: [:create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
