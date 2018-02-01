json.byId do
    json.set! @board.id do
      json.extract! @board, :id, :name, :shared, :author_id
    end
end


json.allIds do
  json.personal do
    json.array! @board_id
  end
end