class AddActiveAccountIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :active_account_id, :integer
  end
end
