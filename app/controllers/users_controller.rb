class UsersController < ApplicationController
  skip_before_action :authorize, only: :index
  skip_before_action :authorize, only: :show

  def index
    render json: User.all, status: :ok
  end

  def show
    return render json: { error: "Please log in" }, status: :unauthorized unless session.include? :user_id
    user = User.find_by(id: session[:user_id])
    render json: user, status: :ok
  end

  # def show
  #   user = User.find_by(id:params[:user_id])
  #   render json: user, status: :ok
  # end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :password, :first_name, :last_name, :profile_img)
  end
end
