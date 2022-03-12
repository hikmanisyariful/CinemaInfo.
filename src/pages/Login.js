import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setAuthedUser } from "actions/users";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", class: "", info: "" });
  const [showMessage, setShowMessage] = useState(false);
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    function checkUser(user) {
      if (user.email === email && user.password === password) {
        return user;
      }
    }

    const existedUser = Object.values(users).filter(checkUser);
    const isExisted = existedUser.length === 1 ? true : false;

    if (isExisted) {
      dispatch(setAuthedUser(email));
      navigate(-1);
    } else {
      setMessage({
        text: "Your login is failed. Please check again your right data!",
        info: "failed",
        className: "alert alert-danger"
      });
      setShowMessage(true);
      setEmail("");
      setPassword("");
      setTimeout(function() {
        setShowMessage(false);
      }, 3000);
    }
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div className="container" style={{ marginTop: 150, marginBottom: 80 }}>
      {showMessage && (
        <div className={`${message.className}`}>{message.text}</div>
      )}
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 border border-dark border-3 rounded p-4">
          <h2 className="text-center text-light mb-5">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label">Email address</label>
              <div className="input-group has-validation">
                <input
                  type="email"
                  className="form-control"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={handleChangeEmail}
                  required
                />
                <div className="invalid-feedback">Please input a email.</div>
              </div>
            </div>
            <div className="mb-5">
              <label className="form-label">Password</label>
              <div className="input-group has-validation">
                <input
                  type="password"
                  className="form-control"
                  placeholder="***********"
                  value={password}
                  onChange={handleChangePassword}
                  required
                />
                <div className="invalid-feedback">
                  Please input valid password.
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={`btn button-primary w-100 mb-3 ${email === "" &&
                "disabled"} ${password === "" && "disabled"}`}
            >
              Submit
            </button>
            <div className="border-bottom border-white border-2 my-4"></div>
            <span className="text-center text-dark">
              Don't have an account?{" "}
            </span>
            <Link to="/register">Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
