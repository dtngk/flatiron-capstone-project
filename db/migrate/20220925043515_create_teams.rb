class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.integer :user_id
      t.integer :char1_id
      t.integer :char2_id
      t.integer :char3_id
      t.string :team_name
      t.timestamps
    end
  end
end
