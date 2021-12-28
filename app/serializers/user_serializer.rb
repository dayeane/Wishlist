class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :email_address
end
