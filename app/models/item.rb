class Item < ApplicationRecord
  has_and_belongs_to_many :lists

  validates :name, presence: true
  validates :price, presence: true
  validates :description, length: {maximum: 250}
  validates :image_url, format: URI::regexp(%w[http https])
end
