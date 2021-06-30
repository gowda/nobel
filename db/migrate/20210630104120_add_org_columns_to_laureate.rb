class AddOrgColumnsToLaureate < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :native_name, :string
    add_column :laureates, :acronym, :string
  end
end
