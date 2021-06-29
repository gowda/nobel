class AddPrizeCountColumnToLaureates < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :prize_count, :integer
  end
end
