class Card < ApplicationRecord
    belongs_to :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :List

    default_scope { order("created_at DESC") }
end
