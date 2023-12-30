import { Link } from "react-router-dom";

export default function Root() {
  return (
    <section>
      <div className="container">
        <div className="sign-up">
          <h1>Sign In</h1>
        </div>
        <div className="form-container">
          <form>
            <div className="e-mail">
              <input
                type="email"
                id="email"
                placeholder="Enter your E-mail"
              ></input>
            </div>

            <div className="password">
              <input
                type="password"
                id="email"
                placeholder="Input your password"
              ></input>
            </div>

            <div className="btn">
              <button>Sign in</button>
            </div>

            <div className="pass-forgot">
              <span>
                <Link to="/resetPassword">Forgot password?</Link>
              </span>
            </div>

           
          </form>
        </div>
      </div>
    </section>
  );
}