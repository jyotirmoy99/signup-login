import React from "react";

function EnterOTP(props) {
  const otpBtn = () => {
    props.history.push("/new_pass");
  };
  return (
    <div>
      <br />
      <h3>Enter OTP</h3>
      <form>
        <input type="text" placeholder="Enter OTP" />
        <br />
        <br />
        <button className="btn btn-success" onClick={otpBtn}>
          Next
        </button>
      </form>
    </div>
  );
}

export default EnterOTP;
