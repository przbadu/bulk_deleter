
class Api::Admins::AccountsController < Api::Admins::BaseController
  def index
    begin
      query = "SELECT * FROM Account WHERE Active=true"
      result = @qbo_api.all(:accounts, select: query)
      response = Qbo::Account.new(result).response

      render json: response
    rescue => e
      render json: { error: e.message }, status: 500
    end
  end

  def bulk_delete
    ids = params[:ids]
  end
end