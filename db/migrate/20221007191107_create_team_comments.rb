class CreateTeamComments < ActiveRecord::Migration[6.1]
  def change
    create_table :team_comments do |t|
      t.integer :user_id
      t.integer :team_id
      t.string :comment
      t.timestamps
    end
  end
end
