class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :fullname
      t.string :start_date
      t.string :end_date
      t.belongs_to :user
      t.string :images
      t.string :apiPark_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end