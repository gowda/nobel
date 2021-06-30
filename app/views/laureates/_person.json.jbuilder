json.firstName person.first_name
json.lastName person.last_name
json.gender person.gender

json.birth do
  json.dateStr person.birth_date_string
  json.place do
    json.extract! person.birth_place, :city, :country, :continent, :name
  end
end

if person.death_date_string.present?
  json.death do
    json.dateStr person.death_date_string
    json.place do
      json.extract! person.death_place, :city, :country, :continent, :name
    end
  end
end
