export const fetchBoards = () => (
  $.ajax({
    method: 'GET',
    url: 'api/boards',
  })
);

export const fetchBoard = id => (
  $.ajax({
    method: 'GET',
    url: `api/boards/${id}`,
  })
);

export const createBoard = board => (
  $.ajax({
    method: 'POST',
    url: 'api/boards',
    data: { board }
  })
);

export const editBoard = board => (
  $.ajax({
    method: 'PATCH',
    url: `api/boards/${board.id}`,
    data: { board }
  })
);

export const deleteBoard = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/boards/${id}`
  })
);