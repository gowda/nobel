class AddLaureateCountColumnToPrizes < ActiveRecord::Migration[6.1]
  def change
    add_column :prizes, :laureate_count, :integer, default: 0
  end
end
