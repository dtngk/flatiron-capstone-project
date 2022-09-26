class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :user_id, :char1_id, :char2_id, :char3_id
  belongs_to :user
  #has_many :character
end
