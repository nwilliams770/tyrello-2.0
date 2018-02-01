json.byId do
   @boards.each do |board|
    json.set! board.id do
      json.extract! board, :id, :name, :shared, :author_id
    end
  end

  @shared_boards.each do |board|
    json.set! board.id do
      json.extract! board, :id, :name, :shared, :author_id
    end
  end
end


json.allIds do
  json.personal do
    json.array! @board_ids
  end

  json.shared do
    json.array! @shared_board_ids
  end
end