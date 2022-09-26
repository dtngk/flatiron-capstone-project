class Character < ApplicationRecord
    has_many :comment, dependent: :destroy
    #has_many :team
    validates :name, presence: true,  uniqueness: true
    validates :attack, :defense, :magic, :speed, :health,  presence: true, numericality: { only_integer: true, in: 1..10 }
end
