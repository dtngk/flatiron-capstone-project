class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :character
    validates :comment, presence: true, length: { minimum: 3 }
end
