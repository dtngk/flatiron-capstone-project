class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :comment
  has_many :team
end
