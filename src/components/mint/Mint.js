import React, { useEffect, useState } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "./Mint.css";

import RingLoader from "react-spinners/RingLoader";
import logo from "../../assets/logo.png";

const Mint = (props) => {
  return (
    <div className="mint" style={{ padding: "40px" }}>
      <Progress
        percent={40}
        strokeWidth={15}
        status="error"
        theme={{
          error: {
            symbol: " ",
            color: "green",
          },
        }}
      />
      <h2 className="available">100 of 500 available</h2>

      <div className="mint-container">
        <section className="sample-container">
          <img src={logo} className="sample" />
        </section>
        <section className="mint-content">
          <div className="mint-add">
            <div className="mint-add-content">
              <p
                className="ethereum-value"
                style={{ fontSize: "30px", textTransform: "capitalize" }}
              >
                0.01/mint
              </p>
            </div>
            <div className="addButtons">
              <button className="addButton" onClick={() => {}}>
                -
              </button>
              <h4>1</h4>
              <button className="addButton" onClick={() => {}}>
                +
              </button>
            </div>
          </div>
          {/* //////////////////// */}
          <div className="mint-total">
            <div className="mint-add-content">
              <p
                className="ethereum-value"
                style={{ fontSize: "40px", textTransform: "capitalize" }}
              >
                0.01 /Total
              </p>
            </div>
            <button onClick={() => {}}>MINT</button>
          </div>
        </section>
      </div>
      <button
        className="close-button"
        onClick={() => {
          props.setShow(false);
        }}
      >
        close
      </button>
    </div>
  );
};

export default Mint;
