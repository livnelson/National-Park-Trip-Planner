class TripSerializer < ActiveModel::Serializer
  attributes :id, :destination, :start_date, :end_date
end
