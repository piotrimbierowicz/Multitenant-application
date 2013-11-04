class ApplicationController < ActionController::Base
	include TenantTools
	before_filter :restore_default_tenant
  protect_from_forgery
end
