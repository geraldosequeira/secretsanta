class AddDateToCampaign < ActiveRecord::Migration[5.2]
  def change
    add_column :campaigns, :event_date, :datetime
    add_column :campaigns, :event_hour, :string
    add_column :campaigns, :lacation, :string 
  end
end
