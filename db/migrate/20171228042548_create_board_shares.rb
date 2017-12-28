class CreateBoardShares < ActiveRecord::Migration[5.1]
  def change
    create_table :board_shares do |t|

      t.timestamps
    end
  end
end
