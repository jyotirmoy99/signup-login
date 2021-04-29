import React, { useState } from "react";
import axios from "axios";
import { url } from "./Service";

function Profile(props) {
  const [data, setData] = useState([]);

  //get data
  const getData = () => {
    axios
      .get(url + "/profile/showprofile", {
        headers: {
          accesstoken: localStorage.getItem("token"),

          email: localStorage.getItem("email"),
        },
      })
      .then((res) => {
        if (res["data"].status === 200) {
          console.log(res);
          setData(res["data"].result);
          console.log(data);
        }
      });
  };

  //logout
  const logout = () => {
    axios
      .post(url + "/auth/logout", [], {
        headers: {
          accesstoken: localStorage.getItem("token"),

          email: localStorage.getItem("email"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.clear();
          props.history.push("/login");
        }
      });
  };

  return (
    <div>
      <br />
      <h2>Profile</h2>
      <span>
        <button className="btn btn-dark" onClick={logout}>
          Logout
        </button>{" "}
        <button className="btn btn-success" onClick={getData}>
          Get Data
        </button>
      </span>
      <table className="table">
        <thead>
          <tr>
            <td>
              <b>First Name</b>
            </td>
            <td>
              <b>Last Name</b>
            </td>
            <td>
              <b>Email</b>
            </td>
            <td>
              <b>Gender</b>
            </td>
            <td>
              <b>Phone</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.firstname}</td>
                <td>{value.lastname}</td>
                <td>{value.email}</td>
                <td>{value.gender}</td>
                <td>{value.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
