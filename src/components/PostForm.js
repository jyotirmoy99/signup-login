// import axios from "axios";
import React, { useState } from "react";
import { url } from "./Service";

function PostForm(props) {
  // const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
    gender: "",
    // age: "",
  });

  //submit
  async function submit(e) {
    e.preventDefault();

    // axios
    //   .post(url, {
    //     fname: data.fname,
    //     lname: data.lname,
    //     phone: data.phone,
    //     email: data.email,
    //     password: data.password,
    //     cpassword: data.cpassword,
    //     // age: data.age,
    //     gender: data.gender,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    if (data.password === data.cpassword) {
      props.history.push("/login");
    } else {
      alert("password didn't match");
    }

    let item = data;
    console.warn(item);
    let result = await fetch(url + "/signup", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    props.history.push("/login");
  }

  const loginPage = () => {
    props.history.push("/login");
  };

  return (
    <div>
      <br />
      <h2>Register Form</h2>
      <br />
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          onChange={(e) => setData({ ...data, fname: e.target.value })}
          id="fname"
          value={data.fname}
          placeholder="First Name"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setData({ ...data, lname: e.target.value })}
          id="lname"
          value={data.lname}
          placeholder="Last Name"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          id="phone"
          value={data.phone}
          placeholder="Phone"
        />
        <br />
        <br />
        <input
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          id="email"
          value={data.email}
          placeholder="Email"
        />
        <br />
        <br />
        {/* <b>Age: </b>
        <select onChange={(e) => setData({ ...data, age: e.target.value })}>
          <option selected disabled>
            Choose Here
          </option>
          <option value="10-20">10 - 20</option>
          <option value="20-30">20 - 30</option>
          <option value="30-40">30 - 40</option>
          <option value="40-50">40 - 50</option>
          <option value="50-60">50 - 60</option>
          <option value="60-70">60 - 70</option>
          <option value="70-80">70 - 80</option>
          <option value="80-90">80 - 90</option>
          <option value="90-100">90 - 100</option>
        </select>
        <br />
        <br /> */}
        <b>Gender: </b>
        <input
          type="radio"
          id="male"
          name="gender"
          checked={data.gender === "Male"}
          value="Male"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        />
        <label htmlFor="male">Male</label>{" "}
        <input
          type="radio"
          id="female"
          name="gender"
          checked={data.gender === "Female"}
          value="Female"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        />
        <label htmlFor="female">Female</label>
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          id="password"
          value={data.password}
          placeholder="password"
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => setData({ ...data, cpassword: e.target.value })}
          id="cpassword"
          value={data.cpassword}
          placeholder="Confirm password"
        />
        <br />
        <br />
        <br />
        <span>
          <button className="btn btn-primary mr-2">Signup</button>
          <button className="btn btn-info" onClick={loginPage}>
            Login
          </button>
        </span>
      </form>
    </div>
  );
}

export default PostForm;
