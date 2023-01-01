class TripsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Trip.all, status: :ok
    end
end
