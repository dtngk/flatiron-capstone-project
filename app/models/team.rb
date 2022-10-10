class Team < ApplicationRecord
    belongs_to :user
    #belongs_to :character
    has_many :team_comment, dependent: :destroy
    validates :team_name, presence: true, length: { minimum: 3 }
end
