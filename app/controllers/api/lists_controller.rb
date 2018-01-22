class Api::ListsController < ApplicationController
  def index
    @board = Board.find(params[:id])
    @lists = board.lists
    @list_ids = []
    @lists.each {|list| @list_ids << list.id }
    render :index
  end
end
