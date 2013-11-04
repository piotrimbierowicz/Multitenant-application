require 'pg_tools'
module TenantTools	
	def setup_tenant
    PgTools.restore_default_search_path
    if @tenant = Tenant.find_by_name(params[:tenant])
      PgTools.set_search_path @tenant.id
    else
      PgTools.restore_default_search_path
    end
  end
  def validate_tenant
  	if @tenant.nil?
  		flash[:notice] = "Nazwa organizacji nie zostala rozpoznana"
  		redirect_to root_path
  	end
  end
  def restore_default_tenant
    PgTools.restore_default_search_path
  end
end