class RankingSerializer < ActiveModel::Serializer
  attributes :id, :rank, :user_id
  belongs_to :user
end
