class TripsController < ApplicationController

def index
    render json: Trip.all, status: :ok
end

def create
    trip = Trip.create!(trip_params)
    # if trip.valid?
    #     #session[:user_id] = user.id
        render json: trip, status: :created
    # end
end

private

def trip_params
    params.permit(:destination, :start_date, :end_date, :user_id)
end

end

