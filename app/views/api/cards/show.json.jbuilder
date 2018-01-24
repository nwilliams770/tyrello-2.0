json.byListId do
  @lists.each do |list|
    json.set! list.id, list.cards.pluck(:id)
    json.set! list.id
    json.array!(list.cards) do |card|
      json.id card.id
    end
  end
end

json.allIds do
  @board.lists.each do |list|
    json.set! list.id do
      list.cards.each do |card|
        json.array! card.id
      end
    end
  end
end