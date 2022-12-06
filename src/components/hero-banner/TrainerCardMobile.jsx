import React from "react";
import userpic from "../../assets/images/img/abbe.jpg";

const TrainerCardMobile = () => {
  return (
    <div className="d-flex row ">
      <div
        className="col-xs-6 col-sm-6 col-lg-3  w-100"
        style={{ maxWidth: "100%" }}
      >
        <img
          src={userpic}
          alt=""
          className="user-image"
          style={{ width: "130px", height: "130px" }}
        />
        <hr
          style={{ backgroundColor: "#fff", opacity: "20%", marginTop: "30px" }}
        />
        <div className="pt-40 pb-80">
          <p style={{ fontSize: "14px" }}>Abbe Joof</p>
          <p style={{ opacity: "0.5", fontSize: "14px" }}>
            Founder + Personal Trainer
          </p>
          <p style={{ opacity: "50%", fontSize: "14px" }}> — </p>
          <p style={{ fontSize: "14px" }}>abbe@bamba.se</p>
          <p style={{ fontSize: "14px" }}>+467 012 345 67</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardMobile;
