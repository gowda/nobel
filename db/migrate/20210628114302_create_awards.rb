class CreateAwards < ActiveRecord::Migration[6.1]
  def change
    create_table :awards do |t|
      t.string :motivation
      t.string :portion, default: '1'
      t.integer :sort_order, default: 1
      t.references :prize, null: false, foreign_key: true
      t.references :laureate, null: false, foreign_key: true

      t.timestamps
    end
  end
end
