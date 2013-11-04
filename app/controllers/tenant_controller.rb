class TenantController < ApplicationController
	include TenantTools
	def redirect_to_organization
		unless params[:tenant].nil?
			redirect_to manager_root_path(params[:tenant])
			return
		end
	end

	def create_organization
		@user = User.new
		@user.email = params[:email]
		@user.password = params[:password]
		@user.valid?
		@tenant = Tenant.find_by_name(params[:tenant])

		# sprawdz czy nazwa organizacji jest wolna
		unless @tenant.nil?
			flash[:alert] = t 'alerts.tenant.name_already_taken'
			redirect_to root_path
			return
		end

		# sprawdz czy dane do logowania są poprawne
		if !@user.valid?
			flash[:alert] = @user.errors.to_a.join('.<br />')
			redirect_to root_path
			return
		end

		# tworzymy organizację
		@tenant = Tenant.new
		@tenant.name = params[:tenant]
		if @tenant.save
			# change db schema
			setup_tenant 
			if @user.save
				redirect_to manager_root_path(params[:tenant])
				return
			end
			restore_default_tenant
		end

	end

end