class AddPrizeCountColumnToCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :prize_count, :integer, default: 0
  end
end
