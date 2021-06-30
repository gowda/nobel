class AddFoundedPlaceIdToLaureates < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :founded_place_id, :integer
    add_foreign_key :laureates, :locations, column: :founded_place_id
  end
end
