class AddThumbnailUrlToLaureates < ActiveRecord::Migration[6.1]
  def change
    add_column :laureates, :thumbnail_url, :string, default: nil
  end
end
