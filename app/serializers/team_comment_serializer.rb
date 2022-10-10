class TeamCommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :team_id, :comment
  belongs_to :user
  belongs_to :team
end
