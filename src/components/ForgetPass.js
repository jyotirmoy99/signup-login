import axios from "axios";
import { url } from "./Service";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
function Forgetpass() {
  const history = useHistory();
  const [forgetpass, setForgetpass] = useState({
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url + "/password/forgotpassword", {
        email: forgetpass.email,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("token", res["data"].accesstoken);
          localStorage.setItem("email", res["data"].email);
          let path = "/reset";
          history.push(path);
        }
        console.log(res);
      });
  };

  return (
    <div>
      <br />
      <h3>Forgot Password?</h3>
      <br />
      <form>
        <input
          type="mail"
          value={forgetpass.email}
          name="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setForgetpass({ ...forgetpass, email: e.target.value })
          }
        />
      </form>
      <br />
      <br />
      <Link to={"/reset"}>
        <button className="btn btn-success" onClick={handleSubmit}>
          Reset
        </button>
      </Link>
    </div>
  );
}
export default Forgetpass;
