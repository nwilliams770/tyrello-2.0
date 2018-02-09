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
    
    @lists.each {|list| @list_ids << list.id }
    render :show
  end

  def update
    @card = Card.find(params[:id])
    @card.title = params[:card][:title]
    @card.list_id = params[:card][:list_id]
    @card.save!
    
    @board = (List.find(params[:card][:list_id])).board
    @lists = @board.lists
    @cards = []
    @list_ids = []
    
    @lists.each {|list| @list_ids << list.id }
    render :show
  end

  def destroy

    @card = Card.find(params[:id])
    @board = @card.list.board
    @card.destroy!

    @lists = @board.lists
    @cards = []
    @list_ids = []
    
    @lists.each {|list| @list_ids << list.id }
    render :show
  end

  private
  def card_params
    params.require(:card).permit(:title, :list_id, :id)
  end
end
