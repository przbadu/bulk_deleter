class Api::Admins::BaseController < ApplicationController
  before_action :authenticate_user!
  before_action :refresh_token
  before_action :qbo_api

  def refresh_token
    if active_account.expires_in < Time.now.utc
      puts "REFRESHING TOKEN!!!"
      tokens = oauth_client.token.refresh_tokens(active_account.refresh_token)
      active_account.access_token = tokens.access_token
      active_account.refresh_token = tokens.refresh_token
      active_account.expires_in = tokens.expires_in.to_i.seconds.from_now
      active_account.x_refresh_token_expires_in = tokens.x_refresh_token_expires_in.to_i.seconds.from_now
      active_account.save!
    else
      puts "TOKEN IS NOT EXPIRED!!!"
    end
  end

  def qbo_api
    @qbo_api ||= QboApi.new(
      access_token: active_account.access_token,
      realm_id: active_account.realm_id
    )
  end

  private

  def page
    @page = params[:page] || 1
  end

  def per_page
    @per_page = 30
  end
end