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

  def index
    @users = User.top_ten_results(search_params[:query], current_user)
    render :index
  end

  def show_shared
    @board_shares = BoardShare.where(board_id: params[:id])
    @shared_with_users = []

    @board_shares.each {|board_share| @shared_with_users << board_share.user }
    render :show_shared
  end

  private
  # allowed for img_url on sign-up
  def user_params
    params.require(:user).permit(:username, :password, :email, :img_url)
  end

  def search_params
    params.require(:search).permit(:query)
  end

  def user_show_params
    params.require(:params).permit(:board_id)
  end
end
