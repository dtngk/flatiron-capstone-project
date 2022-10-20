class Team < ApplicationRecord
    belongs_to :user
    has_many :team_comment, dependent: :destroy
    validates :team_name, presence: true, length: { in: 3..10 }
    validates :characters, presence: true, length: { in: 1..3 }
end
