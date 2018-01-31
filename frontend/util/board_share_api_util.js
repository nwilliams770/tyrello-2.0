export const createBoardShare = board_share => {
  return $.ajax({
    method: 'POST',
    url: 'api/board_shares',
    data: { board_share }
  });
};