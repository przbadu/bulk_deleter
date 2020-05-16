class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :phone, :active_account_id
end
