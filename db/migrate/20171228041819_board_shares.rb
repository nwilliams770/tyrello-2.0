class BoardShares < ActiveRecord::Migration[5.1]
  def change
     create_table :board_shares do |t|
      t.integer :board_id, null: false
      t.integer :contributor_id, null: false

      t.timestamps
    end
    add_index :board_shares, :board_id
    add_index :board_shares, :contributor_id
  end
end
