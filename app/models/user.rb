class User < ApplicationRecord
  has_many :lists
  has_many :items, through: :lists

  validates :name,  :email_address, presence: true
  validates :email_address, email: true
end
