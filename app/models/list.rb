class List < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :items, dependent: :destroy

  validates :name, :user, presence: true
end
