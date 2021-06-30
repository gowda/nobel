json.nativeName org.native_name
json.acronym org.acronym

if org.founded_date_string.present?
  json.founded do
    json.dateStr org.founded_date_string
    json.place do
      json.extract! org.founded_place, :city, :country, :continent, :name
    end
  end
end
