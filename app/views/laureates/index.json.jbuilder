json.array! @laureates do |laureate|
  json.extract! laureate, :id, :name
  json.thumbnailURL laureate.thumbnail_url

  json.person laureate.person?
  json.org laureate.org?

  json.partial! 'person', person: laureate.becomes(Person) if laureate.person?

  json.partial! 'org', org: laureate.becomes(Org) if laureate.org?

  json.set! :awards do
    json.array! laureate.awards do |award|
      json.extract! award, :motivation
      json.category { json.extract! award.prize.category, :name, :short }
      json.year award.prize.year
    end
  end
end
