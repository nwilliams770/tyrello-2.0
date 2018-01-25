json.byListId do
   @lists.each do |list|
    json.set! list.id do
      json.array! list.cards
    end
  end
end


json.allListIds do
  json.array! @list_ids
end 