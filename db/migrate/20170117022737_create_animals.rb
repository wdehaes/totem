class CreateAnimals < ActiveRecord::Migration[5.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.text :description
      t.string :latin_name
      t.integer :status

      t.timestamps
    end
  end
end
