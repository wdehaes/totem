json.extract! animal, :id, :name, :description, :latin_name, :status, :created_at, :updated_at
json.url animal_url(animal, format: :json)