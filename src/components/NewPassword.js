import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "./Service";

const NewPassword = () => {
  const [data, setData] = useState({
    temppassword: "",
    newpassword: "",
    cPass: "",
  });
  const history = useHistory();

  let tok = localStorage.getItem("token");
  let email = localStorage.getItem("email");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let path = "/";
  //     history.push(path);
  //     alert("Password Changed Successfully..");
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url + "/password/resetpassword", data, {
        headers: {
          accesstoken: tok,
          email: email,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.getItem("token", res["data"].accesstoken);
          localStorage.getItem("email", res["data"].email);
          let path = "/login";
          history.push(path);
          //alert("Password Changed Successfully..");
        }
        console.log(res);
      });
  };
  return (
    <>
      <div>
        <br />
        <form>
          <h3>Change your Password</h3>
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter OTP"
            value={data.temppassword}
            name="password"
            onChange={(e) => setData({ ...data, temppassword: e.target.value })}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter New Password"
            value={data.newpassword}
            name="password"
            onChange={(e) => setData({ ...data, newpassword: e.target.value })}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Confirm Password"
            value={data.cPass}
            name="password"
            onChange={(e) => setData({ ...data, cPass: e.target.value })}
          />

          <br />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPassword;
