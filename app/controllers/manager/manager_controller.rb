require 'tenant_tools'
class Manager::ManagerController < ActionController::Base
	include TenantTools
	layout 'manager'

	before_filter :setup_tenant
	before_filter :validate_tenant
	before_filter :authenticate_manager_user!

end