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
    @boards.each {|board| @board_ids << board.id }

    @shared_board_ids = []
    @shared_boards.each {|board| @shared_board_ids << board.id }

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

  def update
    @board = Board.find(params[:id])
    @board.name = board_params[:name]
    @board_id = [board_params[:id]]

    if @board.save!
      render :show
    else
      render :json, @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.lists.each do |list|
      list.cards.each {|card| card.destroy! }
      list.destroy!
    end

    @board.destroy!


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
    render :index
  end

  private

  def board_params
    params.require(:board).permit(:name, :id)
  end
end
