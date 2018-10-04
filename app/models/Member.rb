class Member < ApplicationRecord
    belongs_to :campaign

    validates :name, :email, :campaign, presence: true

    after_save :set_campaign_pending

    #pixel

    protected
    def set_campaign_pending
        self.campaign.update(status: :pending)
    end
end 