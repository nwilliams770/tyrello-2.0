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

  private
  def list_params
    params.require(:list).permit(:title, :board_id)
  end
end
