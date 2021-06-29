class AddRemoteIdUniqueIndexToLaureates < ActiveRecord::Migration[6.1]
  def change
    add_index :laureates, :remote_id, unique: true
  end
end
