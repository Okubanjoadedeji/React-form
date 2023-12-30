import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



function Signup() {

   const [userData, setUserData] = useState({
     email: "",
     fullname: "",
     username: "",
     password: "",
   });

   useEffect(() => {
     localStorage.setItem("userData", JSON.stringify(userData));
   }, [userData]);

   useEffect(() => {
     const storedData = localStorage.getItem("userData");
     if (storedData) {
       setUserData(JSON.parse(storedData));
     }
   }, []);

   const handleChange = (event) => {
     setUserData({ ...userData, [event.target.id]: event.target.value });
   };

   const handleSubmit = (event) => {
     event.preventDefault();
     // Add additional logic here (e.g., sending data to a server)

    console.log("User data saved:", userData);

   };

  return (
    <section>
      <div className="container">
        <div className="sign-up">
          <h1>Sign up</h1>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="e-mail">
              {/*i want to save the data collect here 1*/}
              <input type="tel" id="email" placeholder="Mobile Number or Email" onChange={handleChange} />
            </div>

            <div className="fullname">
              {/*i want to save the data collect here 1*/}
              <input type="text" id="fullname" placeholder="Full Name" onChange={handleChange} />
            </div>

            <div className="username">
              {/*i want to save the data collect here 1*/}
              <input type="text" id="username" placeholder="User Name" onChange={handleChange} />
            </div>

            <div className="password">
              {/*i want to save the data collect here 1*/}
              <input type="password" id="password" placeholder="Password" onChange={handleChange} />
            </div>

            <div className="btn sign-btn">
              {/* onclicking this button to save the data in a js file */}
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>

      <div className="login-box">
        <span>
          Have an account?
          <span>
            <Link to="/"> Sign in</Link>
          </span>
        </span>
      </div>
    </section>
  );
}

export default Signup