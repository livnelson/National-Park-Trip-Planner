class TripSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :start_date, :end_date, :user_id
  #belongs_to :user
end
