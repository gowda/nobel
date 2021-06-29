json.array! @categories do |category|
  json.extract! category, :id, :name, :short
  json.id category.id
  json.prizeCount category.prize_count
  json.laureateCount category.laureate_count
end
