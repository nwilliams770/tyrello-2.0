export const fetchCards = id => (
  $.ajax({
    method: 'GET',
    url: `api/lists/${id}`
  })
);

export const createCard = card => (
  $.ajax({
    method: 'POST',
    url: 'api/cards',
    data: { card }
  })
);

export const editCard = card => (
  $.ajax({
    method: 'PATH',
    url: `api/cards/${card.id}`,
    data: { card }
  })
);

export const deleteCard = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/cards/${id}`
  })
);