class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
    @board.author_id = current_user.id

    if @board.save!
      # render :index
      index
    else
      render :json, @board.errors.full_messages, status: 422
    end
  end

  def index
    @boards = current_user.boards
    @shared_boards = current_user.shared_boards

    @board_ids = []
    @boards.each do |board|
      @board_ids << board.id
    end

    @shared_board_ids = []
    @shared_boards.each do |board|
      @shared_board_ids << board.id
    end

    @list_ids = []
    @boards.each do |board|
      board.lists.each do |list|
        @list_ids << list.id
      end
    end
    render :index
  end

  def show
    @board = Board.find(params[:id])
    @board_id = [@board.id]
    render :show
  end

  def edit
    @board = Board.find(params[:id])
    if @board.save!
      render :json
    else
      render :json, @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy!
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end
end
