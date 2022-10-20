class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email
  has_many :comment
  has_many :team
  has_many :team_comment
  has_many :ranking
end
