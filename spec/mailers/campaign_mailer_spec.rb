require "rails_helper"

RSpec.describe CampaignMailer, type: :mailer do
  
  describe "raffle" do

    before do 
      @campaign = create(:campaign)
      @member = create(:member, campaign: @campaign) 
      @friend = create(:member, campaign: @campaign)
      @mail = CampaignMailer.raffle(@campaign, @member, @friend)
    end
    
    it "headers are visible" do 
      expect(@mail).to eq("Nosso Amigo Secreto: #{@campaign.title}")
      expect(@mail.to).to eq([@member.email])
    end

    it "exist name of member in body" do
      expect(@mail.body.encoded).to match(@member.name)
    end

    it "exist creator name of campaign in body" do
      expect(@mail.boy).to match(@campaign.user.name)
    end

    it "exist an link of member to set email how open" do
      expect(@mail.body.encoded).to match("/members/#{@member.token}/opened")
    end
  end

end
