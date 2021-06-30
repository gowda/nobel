class AddFoundedDateColumnToLaureates < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :founded_date_string, :string
    add_column :laureates, :founded_date, :datetime
  end
end
