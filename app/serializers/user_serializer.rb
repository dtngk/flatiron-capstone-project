class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :comment
  has_many :team
  has_many :team_comment
end
