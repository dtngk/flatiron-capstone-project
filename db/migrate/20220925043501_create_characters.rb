class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :attack
      t.integer :defense
      t.integer :magic
      t.integer :speed
      t.integer :health
      t.timestamps
    end
  end
end
