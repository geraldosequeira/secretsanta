require 'rails_helper'

RSpec.describe MembersController, type: :controller do 
    include Devise::Test::ControllerHelpers

    before(:each) do 
        @request.env["devise.papping"] = Devise.mappings[:user]
        @current_user = FactoryBot.create(:user)
        sign_in @current_user
    end

    describe "POST create" do 
        before(:each) do
            @campaign = FactoryBot.create(:campaign, user: @current_user)
            @member_attributes = attributes_for(:member, campaign_id: @campaign.id)
            post :create, params: {member: @member_attributes}
        end

        it "return true with success" do 
            expect(response).to be_successful
        end

    end

    describe "PUT update" do
        before(:each) do
            request.env["HTTP_ACCEPT"] = 'application/json'
        end

        context "User is the campaign owner" do 
            before(:each) do
                @campaign = FactoryBot.create(:campaign, user: @current_user)
                @member = FactoryBot.create(:member, campaign: @campaign)
                @new_member_attributes = attributes_for(:member, campaign_id: @campaign.id)
                put :update, params: {id: @member.id, member: @new_member_attributes}
            end
            
            it "return http sucess" do
                expect(response).to be_successful
            end

            it "Member have the new attibutes" do
                member = Campaign.last.members.last
                expect(member.name).to eq(@new_member_attributes[:name])
                expect(member.email).to eq(@new_member_attributes[:email])
            end
        end
        
        context "User isn't the campaign owner" do
            it "return http forbidden" do 
                @campaign = FactoryBot.create(:campaign)
                @member = FactoryBot.create(:member, campaign: @campaign)
                @new_member_attributes = attributes_for(:member, campaign_id: @campaign.id)
                put :update, params: {id: @member.id, member: @new_member_attributes}
                expect(response).to have_http_status(:forbidden)
            end
        end
    end

    describe "DELETE destroy" do
        before(:each) do 
            @campaign = create(:campaign)
            @member = create(:member, campaign: @campaign)
        end
        
        context "User is the campaign owner" do 
            before(:each) do 
                request.env["HTTP_ACCEPT"] = 'application/json'
                @campaign.update(user: @current_user)
                delete :destroy, params: {id: @member.id}
            end

            it "returns http sucess" do 
                expect(response).to be_successful
            end
        end

        context "User isnt't the campaign owner" do 
            it "retur http forbidden" do 
                delete :destroy, params: {id: @member.id}
                expect(response).to have_http_status(:forbidden)
            end
        end 
    end

    describe "User open e-mail" do 

        before(:each) do 
            @campaign = create(:campaign, user: @current_user)
            @member = create(:member, campaign: @campaign)
            request.env["HTTP_ACCEPT"] = 'application/json'
            #get :opened, params: { :token }
        end

        context "When member belongs to the campaign" do
            xit "User open gif" do 
                
            end
        end 
    end
end