class ApplicationController < ActionController::Base
    
    rescue_form ActiveRecord::RecordNotFound, :with => :render_404

    def render_404
        redirect_to main_app.root_url
    end
end
