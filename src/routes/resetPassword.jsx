import { Link } from "react-router-dom";
import Login from "../components/Login";

function ResetPassword() {
  return (
    <section>
      <div className="container">
        <form>
          <div className="reset">
            <h1>Trouble logging in?</h1>
          </div>

          <div className="statement">
            <p>{`Enter your email, phone, or username and we'll send you a link to get back into your account.`}</p>
          </div>

          <Login />



          <div className="OR">
            <span>OR</span>
          </div>

          <div className="create-acc">
            <span>
              <Link to="/resetPassword">Create new account</Link>
            </span>
          </div>

          <div className="to-login">
            <span>
              <Link to="/resetPassword">Back to login</Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ResetPassword;