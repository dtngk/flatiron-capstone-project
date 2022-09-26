class Team < ApplicationRecord
    belongs_to :user
    #has_many :character
    validates :team_name, presence: true, length: { minimum: 3 }
end
