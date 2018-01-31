class BoardShare < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :contributor_id,
    class_name: :User

  belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board
end
