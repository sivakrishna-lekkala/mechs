import React from "react";
import "./Header.css";
import { AccountBalanceWallet } from "@mui/icons-material";

const Header = ({ setShow }) => {
  return (
    <ul className="header">
      <li
        onClick={() => {
          setShow(true);
        }}
      >
        MINT
      </li>
      <li>
        <AccountBalanceWallet />
      </li>
    </ul>
  );
};

export default Header;
