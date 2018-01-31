export const searchUserDatabase = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { search: { query } }
  });
};

export const fetchSharedWith = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    data: { id }
  });
};