class User < ApplicationRecord
    has_secure_password
    has_many :team, dependent: :destroy
    has_many :comment, dependent: :destroy
    has_many :team_comment, dependent: :destroy
    has_one :ranking, dependent: :destroy
    validates :username, presence: true,  uniqueness: true, length: { in: 3..16}
    validates :password, presence: true, length: { in: 6..20}
    validates :email, presence: true, length: { in: 6..25}
end
