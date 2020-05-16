class QboAccount < ApplicationRecord
  # validations
  validates :realm_id, presence: true

  # associations
  belongs_to :user

  # scope
  scope :connected, -> { where(connected: true) }
end
