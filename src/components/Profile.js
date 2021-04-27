import React from "react";

function Profile(props) {
  let user = JSON.parse(localStorage.getItem("user-info"));

  //logout function
  function logOut() {
    localStorage.clear();
    props.history.push("/login");
  }
  return (
    <div>
      <br />
      <span>
        <button className="btn btn-dark" onClick={logOut}>
          Logout
        </button>
      </span>
      <h2>User Profile</h2>
    </div>
  );
}

export default Profile;
