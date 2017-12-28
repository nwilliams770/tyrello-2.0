Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :boards, except: [ :new ]
    resources :lists, except: [ :new ]
    resources :cards, except: [ :new ]
  end
  root "static_pages#root"
end