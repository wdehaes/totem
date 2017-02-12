Rails.application.routes.draw do

  devise_for :admins
  resources :animals
  devise_for :users, :controllers => {sessions: 'users/sessions', registrations: 'users/registrations'}

  get 'static_pages/home'
  get 'static_pages/about'

  root 'static_pages#home'
end
