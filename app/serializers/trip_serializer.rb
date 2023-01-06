class TripSerializer < ActiveModel::Serializer
  attributes :fullname, :start_date, :end_date, :user_id
  #belongs_to :user
end
