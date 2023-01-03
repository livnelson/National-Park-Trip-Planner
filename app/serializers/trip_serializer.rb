class TripSerializer < ActiveModel::Serializer
  attributes :id, :destination, :start_date, :end_date, :dest_img, :user_id
  #belongs_to :user
end
