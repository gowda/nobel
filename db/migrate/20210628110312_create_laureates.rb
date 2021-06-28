class CreateLaureates < ActiveRecord::Migration[6.1]
  def change
    create_table :laureates do |t|
      t.string :remote_id
      t.string :name
      t.string :link, default: nil
      t.boolean :org, default: nil
      t.boolean :person, default: nil

      t.timestamps
    end
  end
end
