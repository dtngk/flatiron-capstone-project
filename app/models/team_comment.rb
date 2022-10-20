class TeamComment < ApplicationRecord
    belongs_to :user
    belongs_to :team
    validates :comment, presence: true, length: { in: 3..10 }
end
