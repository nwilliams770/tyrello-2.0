json.byListId do
  json.set! list.id do
      json.array! @card
  end
end