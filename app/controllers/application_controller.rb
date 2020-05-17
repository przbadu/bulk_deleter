class ApplicationController < ActionController::Base
  def index
    render template: 'application'
  end

  def active_account
    @active_account ||= current_user.active_account
  end

  def oauth_client
    @client ||= IntuitOAuth::Client.new(
      ENV['INTUIT_CLIENT_ID'],
      ENV['INTUIT_CLIENT_SECRET'],
      request.base_url + '/oauth2/callback',
      'sandbox'
    )
  end
end
