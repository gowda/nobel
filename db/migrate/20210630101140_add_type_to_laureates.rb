class AddTypeToLaureates < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :type, :string
  end
end
