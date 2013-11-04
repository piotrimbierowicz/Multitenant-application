require 'tenant_tools'
class Manager::SessionsController < ::Devise::SessionsController
	include TenantTools
	layout 'landing_fullscreen'

	before_filter :setup_tenant

	def new
    @user = User.new
  end

  def create
  	super
  end

  def destroy
    super
  end

end