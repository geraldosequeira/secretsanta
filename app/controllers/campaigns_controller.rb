class CampaignsController < ApplicationController
    before_action :authenticate_user!
  
    before_action :set_campaign, only: [:show, :destroy, :update, :raffle]
    before_action :is_owner?, only: [:show, :destroy, :update, :raffle]
  
    def index
      @campaigns = current_user.campaigns
    end
    
    def show
    end
  
    def create
      @campaign = Campaign.new(user: current_user, title: 'Nova Campanha', description: 'Descreva sua campanha!')
  
      respond_to do |format|
        if @campaign.save
            format.html {redirect_to campaign_path(@campaign.id)}
        else
            format.html {redirect_to main_app.root_url, notice: @campaign.errors}
        end
      end
    end
  
    def update
      if @campaign.update(campaign_params)
        render json: true
      else
        render json: @campaign.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @campaign.destroy
  
      respond_to do |format|
        format.json { render json: true }
      end
    end
  
    def raffle
      if @campaign.status != "pending"
        render json: 'Já foi sorteada', status: :unprocessable_entity
      elsif @campaign.members.count < 3
        render json: 'A campanha precisa de pelo menos 3 pessoas', status: :unprocessable_entity
      else
        CampaignRaffleJob.perform_later @campaign
        render json: true
      end
    end
  
    private
  
    def set_campaign
      @campaign = Campaign.find(params[:id])
    end
  
    def campaign_params
      params.require(:campaign).permit(:title, :description, :event_date, :event_hour, :locale).merge(user: current_user)
    end
  
    def is_owner?
      unless current_user == @campaign.user
        respond_to do |format|
          format.json { render json: false, status: :forbidden }
          format.html { redirect_to main_app.root_url }
        end
      end
    end
  end