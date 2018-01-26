class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    @lists = [List.find(card_params[:list_id])]
    @list_ids = [@lists[0].id]

    if @card.save!
      render :show
    else
      render :json, @card.errors.full_messages, status: 422
    end
  end
  
  def show
    @board = Board.find(params[:id])
    @lists = @board.lists
    @cards = []
    @list_ids = []
    
    @lists.each do |list|
      @list_ids << list.id
      list.cards.each {|card| @cards << card}
    end
    render :show
  end
  private
  def card_params
    params.require(:card).permit(:title, :list_id)
  end
end
