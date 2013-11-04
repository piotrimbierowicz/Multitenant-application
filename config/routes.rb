Impuls::Application.routes.draw do

  root :to => 'home#landing'
  post 'redirect_to_organization' => 'tenant#redirect_to_organization'
  post 'create_organization' => 'tenant#create_organization'


  namespace :manager do
    scope ':tenant' do

      root :to => 'dashboard#index'
      # autoryzacja
      devise_for :users
      # , :controllers => { :sessions => "manager/sessions" }

    end
  end

end