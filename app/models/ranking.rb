class Ranking < ApplicationRecord
    belongs_to :user
    validates :rank, presence: true
end
