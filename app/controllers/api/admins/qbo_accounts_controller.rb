class Api::Admins::QboAccountsController < ApplicationController
  def index
    @accounts = current_user.qbo_accounts.connected
    render json: @accounts
  end

  def switch_account
    if id = params[:id]
      account = QboAccount.where(id: id).first
      current_user.update(active_account: account)

      render json: current_user
    end
  end
end
