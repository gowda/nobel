class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :city
      t.string :city_then
      t.string :country
      t.string :country_then
      t.string :continent
      t.string :wiki_link

      t.timestamps
    end
  end
end
