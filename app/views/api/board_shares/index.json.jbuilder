json.boards do
  json.byId do
    @boards.each do |board|
      json.set! board.id do
        json.extract! board, :id, :name, :starred, :shared
      end
    end

    @shared_boards.each do |board|
      json.set! board.id do
        json.extract! board, :id, :name, :starred
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
end

json.user do
  json.set! @shared_with_user.id do
    json.extract! @shared_with_user, :id, :username, :img_url
  end
end