class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :character_id, :user_id
  belongs_to :character
  belongs_to :user 
end
