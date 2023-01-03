class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :category
  has_one :trip
end
