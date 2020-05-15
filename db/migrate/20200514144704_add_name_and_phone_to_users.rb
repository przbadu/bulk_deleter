class AddNameAndPhoneToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :phone, :string
    add_column :users, :verified_email, :boolean, null: false, default: false
    add_column :users, :verified_phone, :boolean, null: false, default: false
  end
end
