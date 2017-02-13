class AnimalForm < Reform::Form
  property :name
  property :latin_name
  property :description
  property :status

  validation do
   required(:name).filled
   required(:description).filled
   required(:status).filled
  end

end
