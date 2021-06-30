class AddPersonColumnsToLaureate < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :first_name, :string
    add_column :laureates, :last_name, :string
    add_column :laureates, :gender, :string
  end
end
