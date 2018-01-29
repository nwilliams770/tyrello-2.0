export const fetchLists = id => (
  $.ajax({
    method: 'GET',
    url: `api/lists/${id}`
  })
);

export const createList = list => (
  $.ajax({
    method: 'POST',
    url: 'api/lists',
    data: { list }
  })
);

export const editList = list => (
  $.ajax({
    method: 'PATCH',
    url: `api/lists/${list.id}`,
    data: { list }
  })
);

export const deleteList = list => (
  $.ajax({
    method: 'DELETE',
    url: `api/lists/${list.id}`,
    data: {list}
  })
);