class UsersController < ApplicationController

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, include: ['lists', 'lists.items']
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  # def lists
  #   user = User.find_by(id: session[:user_id])
  #   render json: user
  # end

  private

   def user_params
    params.permit(:name, :password, :email_address)
   end
end
