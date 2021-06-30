class AddBirthAndDeathDateColumnsToLaureates < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :birth_date_string, :string
    add_column :laureates, :birth_date, :datetime
    add_column :laureates, :death_date_string, :string
    add_column :laureates, :death_date, :datetime
  end
end
