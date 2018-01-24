json.byId do
   @lists.each do |list|
    json.set! list.id do
      json.extract! list, :id, :title
    end
  end
end


json.allIds do
  json.array! @list_ids
end