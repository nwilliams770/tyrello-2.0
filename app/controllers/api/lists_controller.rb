class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    @board = Board.find(list_params[:board_id])
    
    if @list.save!
      @lists = @board.lists
      @list_ids = []
      @lists.each {|list| @list_ids << list.id }
      render :show
    else
      render :json, @list.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find(params[:id])
    @lists = @board.lists
    @list_ids = []
    @lists.each {|list| @list_ids << list.id }
    render :show
  end

  def update
    @list = List.find(list_params[:id])
    @list.title = list_params[:title]
    @board = @list.board
    @lists = @board.lists
    @list_ids = []
    @lists.each {|list| @list_ids << list.id}
    if @list.save!
      render :show
    end
  end

  def destroy
    @list = List.find(list_params[:id])
    @cards = @list.cards
    @board = @list.board

    @list.destroy!

    @lists = @board.lists
    @list_ids = []
    @lists.each {|list| @list_ids << list.id }
    render :show
  end

  private
  def list_params
    params.require(:list).permit(:title, :board_id, :id)
  end
end
