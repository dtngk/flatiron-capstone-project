class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :user_id, :characters
  belongs_to :user
  has_many :team_comment
end
