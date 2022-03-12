import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setAuthedUser } from "actions/users";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.users.users);
  const [message, setMessage] = useState({ text: "", class: "", info: "" });
  const [showMessage, setShowMessage] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isExist = Object.values(users).filter(
      data => data.email === user.email
    );

    if (isExist.length === 0) {
      dispatch(addUser(user));
      dispatch(setAuthedUser(user.email));
      navigate(-2);
    } else {
      setMessage({
        text: "Your email is exists. Please correct your data!",
        info: "failed",
        className: "alert alert-danger"
      });
      setShowMessage(true);
      setTimeout(function() {
        setShowMessage(false);
      }, 3000);

      setUser({
        ...user,
        email: "",
        password: ""
      });
    }
  };

  return (
    <div className="container" style={{ marginTop: 150, marginBottom: 80 }}>
      {showMessage && (
        <div className={`${message.className}`}>{message.text}</div>
      )}
      <div className="row justify-content-center">
        <div className="border border-dark border-3 rounded p-4 col-xl-6 col-lg-8 col-md-10 col-10">
          <h2 className="mb-4 text-light">Create new account.</h2>
          <div className="mb-4">
            <span className="text-dark">Already A Member? </span>
            <Link to="/login">Log In</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-12 col-sm mb-4 mb-sm-0">
                <label className="form-label">First Name</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="john"
                    value={user.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-sm">
                <label className="form-label">Last Name</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="doe"
                    value={user.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="johndoe@gmail.com"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="***********"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col col-md-6 offset-md-6">
                <button type="submit" className="btn button-primary w-100">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
