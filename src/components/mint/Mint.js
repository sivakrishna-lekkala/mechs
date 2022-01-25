import React, { useEffect, useState } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "./Mint.css";

import RingLoader from "react-spinners/RingLoader";
import logo from "../../assets/logo.png";
import ClearIcon from "@mui/icons-material/Clear";
import {
  slotPrice,
  totalSupply,
  isPreSale,
  isMainSale,
  isFreeSale,
  _mintRandom,
} from "../../contract/SmartContract";

const Mint = (props) => {
  const [count, setCount] = useState(1);
  const [available, setAvailable] = useState(" ");
  const [prSale, setPreSale] = useState(false);
  const [maiSale, setMainSale] = useState(false);
  const [freSale, setFreeSale] = useState(false);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(0.01);

  const decreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const increaseCount = () => {
    if (count < 2) {
      setCount((prev) => prev + 1);
    }
  };
  useEffect(() => {
    totalSupply().then((e) => {
      setAvailable(e);
      setLoading(false);
    });
    isPreSale().then((e) => {
      setPreSale(e);
    });
    isMainSale().then((e) => {
      setMainSale(e);
    });
    isFreeSale().then((e) => {
      setFreeSale(e);
    });

    // slotPrice().then((e) => {
    //   setPrice(e);
    // });
  }, []);
  return (
    <div className="mint" style={{ padding: "40px" }}>
      {loading ? (
        <div className="loading">
          <RingLoader color="#FF1700" loading={true} size={50} />
        </div>
      ) : (
        <>
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
          <h2 className="available">{available} of 500 available</h2>
          {prSale && <h2>You are in Pre Sale</h2>}
          {maiSale && <h2>You are in Main Sale</h2>}
          {freSale && <h2>You are in Free Sale</h2>}
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
                  <button className="addButton" onClick={decreaseCount}>
                    -
                  </button>
                  <h4>{count}</h4>
                  <button className="addButton" onClick={increaseCount}>
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
                    {price * count}/Total
                  </p>
                </div>
                <button
                  onClick={() => {
                    _mintRandom(price, "", count);
                  }}
                  disabled={!prSale && !maiSale && !freSale}
                  className={!prSale && !maiSale && !freSale && "disable"}
                >
                  MINT
                </button>
              </div>
            </section>
          </div>
          <ClearIcon
            onClick={() => {
              props.setShow(false);
            }}
            className="close-icon"
          />
        </>
      )}
    </div>
  );
};

export default Mint;
