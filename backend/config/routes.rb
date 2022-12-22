Rails.application.routes.draw do
  scope '/api' do
    devise_for :users

    get 'check_signed_in', to: 'application#check_signed_in'
  end
end
