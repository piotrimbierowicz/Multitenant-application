class HomeController < ApplicationController
	layout 'landing_fullscreen', :only => [:landing]
	
	def landing
	end

end