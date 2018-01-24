class Api::ListsController < ApplicationController
  def show
    @board = Board.find(params[:id])
    @lists = @board.lists
    @list_ids = []
    @lists.each {|list| @list_ids << list.id }
    render :show
  end
end
