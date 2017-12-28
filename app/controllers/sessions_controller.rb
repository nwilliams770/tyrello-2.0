class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      # would go to boards page
      render "api/users/show"
    else
      # would go to errors state slice
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      # go back to splash page
      render "api/users/show"
    else
      # may not be necessary based on my design
      render json: ["Nobody signed in"], status: 404
    end
  end
end
