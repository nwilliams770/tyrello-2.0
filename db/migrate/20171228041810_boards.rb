class Boards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.integer :author_id, null: false
      t.boolean :starred, null: false, default: false

      t.timestamps
    end

    add_index :boards, :author_id
  end
end
