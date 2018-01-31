class Api::BoardSharesController < ApplicationController
  def create
    @board_share = BoardShare.new(board_share_params)
    if @board_share.save!
      @board = Board.find(board_share_params[:board_id])
      @board.shared = true
      @board_id = [board_share_params[:board_id]]
      render :show
    end
  end

  private
  def board_share_params
    params.require(:board_share).permit(:board_id, :contributor_id)
  end
end
