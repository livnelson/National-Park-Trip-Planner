class UsersController < ApplicationController
  skip_before_action :authorize, only: :show

  # def index
  #   render json: User.all, status: :ok
  # end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user, status: :ok
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :profile_img)
  end

end