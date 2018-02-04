class Api::BoardSharesController < ApplicationController
  def create
    @board_share = BoardShare.new(board_share_params)

    if @board_share.save!
      @board = Board.find(board_share_params[:board_id])
      @board.shared = true
      @board.save!
      
      @boards = current_user.boards
      @shared_boards = current_user.shared_boards 

      @board_ids = []
      @boards.each {|board| @board_ids << board.id }

      @shared_board_ids = []
      @shared_boards.each {|board| @shared_board_ids << board.id }

      @shared_with_user = User.find(board_share_params[:contributor_id])
    end
    render :index
  end

  def index
    @board = Board.find(params[:id])
    @owner = @board.user
    @shares = [BoardShare.find_by(board_id: params[:id])]
    @shared_withs = [@owner]
    @shares.each {|board_share| @shared_withs << board_share.user }
    
    render :show
  end


  private
  def board_share_params
    params.require(:board_share).permit(:board_id, :contributor_id)
  end

  def shared_user_params
    params.require(:board_id).permit(:id)
  end
end
