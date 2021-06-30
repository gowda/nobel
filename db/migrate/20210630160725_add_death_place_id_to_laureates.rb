class AddDeathPlaceIdToLaureates < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :death_place_id, :integer
    add_foreign_key :laureates, :locations, column: :death_place_id
  end
end
