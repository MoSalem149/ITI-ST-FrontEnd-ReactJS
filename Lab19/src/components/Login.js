import React, { useState } from "react";
import "../styles/style.css";
import "../App.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpUsernameValid, setSignUpUsernameValid] = useState(true);
  const [signUpPasswordValid, setSignUpPasswordValid] = useState(true);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setValidated(true);
    } else {
      if (
        (username === "MoSalem" && password === "149") ||
        (username === signUpUsername && password === signUpPassword)
      ) {
        setValidated(false);
        onLogin();
      } else {
        setValidated(true);
      }
    }
  };

  const handleSignUp = () => {
    if (!signUpUsername || !signUpPassword) {
      setSignUpUsernameValid(!signUpUsername);
      setSignUpPasswordValid(!signUpPassword);
      return;
    }
    setUsername(signUpUsername);
    setPassword(signUpPassword);
    setShowSignUp(false);
    setSignUpSuccess(true);
  };

  return (
    <div className={`login-container ${showSignUp ? "expanded" : ""}`}>
      <h2>{showSignUp ? "Sign Up" : "Login"}</h2>
      {/* Display the message */}
      <p>
        {showSignUp
          ? "Don't have an account? Please SignUp."
          : "Already have an account? You can Login else Please SignUp First."}
      </p>

      {signUpSuccess && (
        <div className="alert alert-success" role="alert">
          You have successfully signed up!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Login inputs */}
        {!showSignUp && (
          <>
            <div className="input-group">
              <span className="input-group-text i">
                <i className="fas fa-user-alt"></i>
              </span>
              <input
                type="text"
                className={`form-control ${
                  validated && !username ? "is-invalid" : ""
                }`}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {validated && !username && (
                <span className="invalid-feedback">
                  Please enter a valid username.
                </span>
              )}
            </div>
            <div className="input-group">
              <span className="input-group-text i">
                <i className="fas fa-user-lock"></i>
              </span>
              <input
                type="password"
                className={`form-control ${
                  validated && !password ? "is-invalid" : ""
                }`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {validated && !password && (
                <span className="invalid-feedback">
                  Please enter a valid password.
                </span>
              )}
            </div>
            <button className="btn btn-primary mt-2" type="submit">
              Login
            </button>
          </>
        )}

        {/* Sign up inputs */}
        {showSignUp && (
          <>
            <div className="input-group">
              <span className="input-group-text i">
                <i className="fas fa-user-alt"></i>
              </span>
              <input
                type="text"
                className={`form-control ${
                  !signUpUsernameValid || (showSignUp && !signUpUsername)
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Username"
                value={signUpUsername}
                onChange={(e) => {
                  setSignUpUsername(e.target.value);
                  setSignUpUsernameValid(true);
                }}
                required
              />
              {!signUpUsernameValid && (
                <span className="invalid-feedback">
                  Please enter a valid username.
                </span>
              )}
            </div>
            <div className="input-group">
              <span className="input-group-text i">
                <i className="fas fa-user-lock"></i>
              </span>
              <input
                type="password"
                className={`form-control ${
                  !signUpPasswordValid || (showSignUp && !signUpPassword)
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => {
                  setSignUpPassword(e.target.value);
                  setSignUpPasswordValid(true);
                }}
                required
              />
              {!signUpPasswordValid && (
                <span className="invalid-feedback">
                  Please enter a valid password.
                </span>
              )}
            </div>
            <button
              className="btn btn-primary mt-2"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </>
        )}

        {/* Toggle between Login and Sign Up */}
        {!showSignUp && (
          <button
            className="btn btn-secondary mt-2"
            type="button"
            onClick={() => setShowSignUp(true)}
          >
            Sign Up
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;
