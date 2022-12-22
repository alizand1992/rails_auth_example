class ApplicationController < ActionController::Base
  respond_to :json
  skip_before_action :verify_authenticity_token

  before_action :authenticate_user!, only: [:check_signed_in]

  def check_signed_in
    render json: { message: "SUCCESS!" }, status: :ok
  end
end
