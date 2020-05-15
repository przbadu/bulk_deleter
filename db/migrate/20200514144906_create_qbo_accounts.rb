class CreateQboAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :qbo_accounts do |t|
      t.string      :realm_id
      t.string      :company_name
      t.string      :access_token
      t.string      :refresh_token
      t.datetime    :expires_in
      t.datetime    :x_refresh_token_expires_in
      t.boolean     :connected, null: false, default: false
      t.references  :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
