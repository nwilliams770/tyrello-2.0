class Api::CardsController < ApplicationController
  def index
    @board = Board.find(params[:id])
    @lists = @board.list
    @cards = []
    @card_ids = []

    @lists.each do |list|
      list.cards.each {|card| @cards << card}
    end

    @cards.each { |card| @card_ids << card.id }

    render :index
  end
end
