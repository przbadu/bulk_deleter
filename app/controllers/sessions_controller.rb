class SessionsController < ApplicationController
  before_action :oauth_client

  def oauth2
    scopes = [
      IntuitOAuth::Scopes::ACCOUNTING,
      IntuitOAuth::Scopes::OPENID,
      IntuitOAuth::Scopes::EMAIL,
      IntuitOAuth::Scopes::PHONE
    ]

    redirect_to @client.code.get_auth_uri(scopes)
  end

  def oauth2_callback
    realm_id = params[:realm_id]
    code = params[:code]
    tokens = @client.token.get_bearer_token(code)
    # user
    user_info = @client.openid.get_user_info(tokens.access_token)
    user = User.find_or_create!(user_info)
    # account
    user.qbo_accounts.create(
      realm_id: realm_id,
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expires_in: tokens.expires_in.to_i.seconds.from_now,
      x_refresh_token_expires_in: tokens.x_refresh_token_expires_in.to_i.seconds.from_now,
      connected: true
    )

    sign_in user

    redirect_to :admins
  end

  private

  def oauth_client
    @client = IntuitOAuth::Client.new(
      ENV['INTUIT_CLIENT_ID'],
      ENV['INTUIT_CLIENT_SECRET'],
      request.base_url + '/oauth2/callback',
      'sandbox'
    )
  end
end
