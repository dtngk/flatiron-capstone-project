class User < ApplicationRecord
    has_secure_password
    has_many :team, dependent: :destroy
    has_many :comment, dependent: :destroy
    has_many :team_comment, dependent: :destroy
    validates :username, presence: true,  uniqueness: true, length: { in: 3..8}
    validates :password_digest, presence: true, length: { in: 6..20}
end
