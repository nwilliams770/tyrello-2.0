class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      # go to board index
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  # allowed for img_url on sign-up
  def user_params
    params.require(:user).permit(:username, :password, :email, :img_url)
  end
end
