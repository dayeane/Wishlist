class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_many :items
end
