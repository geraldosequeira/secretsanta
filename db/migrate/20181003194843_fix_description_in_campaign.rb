class FixDescriptionInCampaign < ActiveRecord::Migration[5.2]
  def change
    rename_column :campaigns, :descrption, :description
  end
end
