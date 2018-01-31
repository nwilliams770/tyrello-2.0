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

      @list_ids = []
      @boards.each do |board|
      board.lists.each do |list|
        @list_ids << list.id
        end
      end
    end
    render :index
  end

  private
  def board_share_params
    params.require(:board_share).permit(:board_id, :contributor_id)
  end
end
