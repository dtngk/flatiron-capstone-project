class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :attack, :defense, :magic, :speed, :health
  has_many :comment
  #has_many :team
end
