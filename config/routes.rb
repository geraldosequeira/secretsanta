require 'sidekiq/web'

Rails.application.routes.draw do
  root to: 'pages#home'

  devise_for :users, :controllers => { registrations: 'registrations' }

  mount Sidekiq::Web => '/sidekiq'

  resources :campaigns, except: [:new] do
    post 'raffle', on: :member #/campaigns/:id/raffle
  end
  
  resources :members, only: [:create, :destroy, :update]
  
  get 'members/:token/opened', to: 'members#opened'
end
