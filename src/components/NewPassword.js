import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "./Service";

const NewPassword = () => {
  const [data, setData] = useState({
    temppassword: "",
    newpassword: "",
    cpassword: "",
  });
  const history = useHistory();

  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url + "/password/resetpassword", data, {
        headers: {
          accesstoken: localStorage.getItem("token"),
          email: localStorage.getItem("email"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.getItem("token", res["data"].accesstoken);
          localStorage.getItem("email", res["data"].email);
          let path = "/login";
          history.push(path);
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
            type="text"
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
            value={data.cpassword}
            name="password"
            onChange={(e) => setData({ ...data, cpassword: e.target.value })}
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
