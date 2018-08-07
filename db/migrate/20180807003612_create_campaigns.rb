class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|
      t.string :title
      t.text :descrption
      t.references :user, foreign_key: true
      t.integer :status
      t.timestamps
    end
  end
end
