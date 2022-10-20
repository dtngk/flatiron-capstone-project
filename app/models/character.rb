class Character < ApplicationRecord
    has_many :comment, dependent: :destroy
    validates :name, presence: true,  uniqueness: true
    validates :attack, :defense, :magic, :speed,  presence: true, numericality: { only_integer: true, in: 1..20 }
    validates :health, presence: true, numericality: { only_integer: true, in: 40...100 }
end
