class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :destination
      t.integer :lat
      t.integer :lng
      t.date :start_date
      t.date :end_date
      t.belongs_to :user

      t.timestamps
    end
  end
end