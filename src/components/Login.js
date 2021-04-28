import React, { useState } from "react";
import { url } from "./Service";

function Login(props) {
  const [user, setUser] = useState([{ email: "", password: "" }]);

  async function handleLogin(e) {
    e.preventDefault();

    console.warn("data", user);
    let item = user;
    let result = await fetch(url + "/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("token", result.accesstoken);
    localStorage.setItem("email", result.email);
    props.history.push("/profile");
  }
  const registerPage = () => {
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 p-5">
          <div className="row">
            <div className="col-md-6 mr-auto ml-auto">
              <form>
                <div className="form-group p-5">
                  <h3 className="text-center">Login</h3>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    className="form-control"
                  ></input>
                  <br></br>
                  <br></br>
                  <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className="form-control"
                  ></input>
                  <br></br>
                  <br></br>
                  <span>
                    <button
                      onClick={handleLogin}
                      // disabled={!user.email || !user.password}
                      className="btn btn-primary mr-2"
                    >
                      Login
                    </button>
                  </span>
                </div>
              </form>
              <br />
              <small>Create a new Account? </small>{" "}
              <button onClick={registerPage} className="btn btn-info">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
