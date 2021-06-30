json.array! @laureates do |laureate|
  json.extract! laureate, :name
  if laureate.person?
    json.gender ['male', 'female'].sample
  end

  json.set! :awards do
    json.array! laureate.awards do |award|
      json.extract! award, :motivation
      json.year award.prize.year
    end
  end
end
