class SessionsController < ApplicationController
  skip_before_action :authorize, only: :login

  def login
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      #set user to sessions
      render json: user, status: :ok
    else
      render json: { errors: "Invalid Password or Username" }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

end
