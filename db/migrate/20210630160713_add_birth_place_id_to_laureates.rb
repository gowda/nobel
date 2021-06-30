class AddBirthPlaceIdToLaureates < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :birth_place_id, :integer
    add_foreign_key :laureates, :locations, column: :birth_place_id
  end
end
