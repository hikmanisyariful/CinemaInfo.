import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(email, password);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row justify-content-center">
        <div className="col-9 col-sm-8 col-md-6 col-lg-5 col-xl-4 border border-white rounded p-4">
          <p className="fs-3 text-center mb-5">Login</p>
          {/* <form className="needs-validation"> */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
            <button type="submit" className="btn button-primary w-100 mb-3">
              Submit
            </button>
          </Form>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
