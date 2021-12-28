class User < ApplicationRecord
  has_many :lists
  has_many :items, through: :lists

  validates :name, :password, :email_address, presence: true
end
