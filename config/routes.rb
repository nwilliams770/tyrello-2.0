Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :board_shares, only: [:create]
    resources :boards, except: [ :new ]
    resources :lists, except: [ :new ]
    resources :cards, except: [ :new ]

    match 'users/:boardId', to: 'users#show_shared', via: [:get]
  end
  
  root "static_pages#root"
end