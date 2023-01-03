class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.belongs_to :trip, null: false, foreign_key: true
      t.string :name
      t.string :category

      t.timestamps
    end
  end
end
