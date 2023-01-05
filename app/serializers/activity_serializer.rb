class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :trip
  has_one :user
end
