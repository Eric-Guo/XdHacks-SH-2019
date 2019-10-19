# frozen_string_literal: true

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should sign in user-sign-in form" do
    post user_session_path, as: :json,
      params: { user: { email: "eric@cloud-mes.com",
                        password: "123456" } },
      headers: { "HTTP_JWT_AUD": "cam_price_test" }
    assert_response 201
  end
end
