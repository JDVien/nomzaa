import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import "./login.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demo = async (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
    history.push("/");
  };

  const signupButton = (e) => {
    e.preventDefault();
    history.push("/signup");
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="top_level_login">
        <div className="login_container">
      <div id="nom_auth_logo">
        <img
          id="nomzaa_logo_auth_sm"
          src="/static/images/nomza_logo_dark_lg.png"
          alt="nomzaa logo"
          width="120"
          height="auto"
        />
      </div>
          <div className="login-form-container">
            <h1>Sign-In</h1>
            <form className="login_form" onSubmit={onLogin}>
              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={updateEmail}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={updatePassword}
                />

                <button type="submit">Sign In</button>
                <button onClick={demo}>Demo User</button>
              </div>
            </form>
            <span className="priv_text">
              By continuing, you agree to Nomzaa's Conditions of Use and Privacy
              Notice.
            </span>
          </div>
          <div className="signup_bttn_container">
            <span className="new_user_text">New to Nomzaa?</span>
            <button onClick={signupButton}>Create your Nomzaa account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
