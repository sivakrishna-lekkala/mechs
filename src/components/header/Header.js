import React, { useState } from "react";
import "./Header.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { providerHandler } from "./../../contract/SmartContract";

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
      /* Add a toast here to install metamask*/
    }
  };
  return (
    <ul className="header">
      <li
        className={show ? "active" : ""}
        onClick={() => {
          active && setShow(true);
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
  );
};

export default Header;
