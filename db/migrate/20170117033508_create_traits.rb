class CreateTraits < ActiveRecord::Migration[5.0]
  def change
    create_table :traits do |t|
      t.string :word
      t.text :definition
      t.integer :status

      t.timestamps
    end
  end
end
