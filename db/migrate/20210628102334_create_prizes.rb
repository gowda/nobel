class CreatePrizes < ActiveRecord::Migration[6.1]
  def change
    create_table :prizes do |t|
      t.string :year
      t.integer :amount
      t.string :link
      t.string :category_id
      t.timestamps
    end

    add_foreign_key :prizes, :categories, primary_key: :cid
  end
end
