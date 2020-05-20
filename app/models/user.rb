class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable
  devise :database_authenticatable, :rememberable

  # associations
  has_many :qbo_accounts
  belongs_to :active_account, class_name: 'QboAccount', optional: true

  def self.find_or_create!(user_info)
    User.find_or_initialize_by(email: user_info['email']).tap do |u|
      u.password        = Devise.friendly_token
      u.verified_email  = user_info['emailVerified']
      u.phone           = user_info['phoneNumber']
      u.verified_phone  = user_info['phoneNumberVerified']
      # u.full_name       = user_info['GivenName'].to_s + user_info['FamilyName']
      u.save!
    end
  end
end
