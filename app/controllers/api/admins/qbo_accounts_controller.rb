class Api::Admins::QboAccountsController < ApplicationController
  def index
    @accounts = current_user.qbo_accounts.connected
    render json: @accounts
  end
end
