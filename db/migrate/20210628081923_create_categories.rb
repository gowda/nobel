class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories, id: false do |t|
      t.primary_key :cid, :string, limit: 64
      t.string :name
      t.string :short

      t.timestamps
    end
  end
end
