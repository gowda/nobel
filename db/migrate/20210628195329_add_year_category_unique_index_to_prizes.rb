class AddYearCategoryUniqueIndexToPrizes < ActiveRecord::Migration[6.1]
  def change
    add_index :prizes, [:year, :category_id], unique: true
  end
end
