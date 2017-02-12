class CreateAnimalTrait < ActiveRecord::Migration[5.0]
  def change
    create_table :animal_traits do |t|
      t.integer :animal_id
      t.integer :trait_id
      t.integer :strength
      t.text :description
    end
  end
end
