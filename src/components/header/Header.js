import React, { useState } from "react";
import "./Header.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { providerHandler } from "./../../contract/SmartContract";
import { toast, ToastContainer } from "react-toastify";
import toastProperties from "../Toast/toast";
import "react-toastify/dist/ReactToastify.css";

const Header = ({ setShow, show }) => {
  const [active, setActive] = useState(false);
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (result) => {
          setActive(true);
          await providerHandler();
        })
        .catch((e) => {});
    } else {
      toast(
        <div>
          <h4>Please install metamask</h4>
          <h4>To proceed further.</h4>
        </div>,
        {
          ...toastProperties,
          autoClose: 10000,
        }
      );
    }
  };
  return (
    <>
      <ul className="header">
        <li
          className={show ? "active" : ""}
          onClick={() => {
            active
              ? setShow(true)
              : toast(
                  <div>
                    <h4>Please link metamask to continue.</h4>
                  </div>,
                  {
                    ...toastProperties,
                    autoClose: 10000,
                  }
                );
          }}
        >
          MINT
        </li>

        <li>
          <AccountBalanceWalletIcon
            style={{ color: active ? "#adfc00" : "white" }}
            onClick={() => {
              connectWalletHandler();
            }}
            className="header-wallet"
          />
        </li>
      </ul>
      <ToastContainer />
    </>
  );
};

export default Header;
