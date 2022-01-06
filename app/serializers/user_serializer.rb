class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :email_address
  has_many :lists
end
