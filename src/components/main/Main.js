import React, { useState } from "react";
import "./Main.css";
import logo from "../../assets/logo.png";
import Header from "./../header/Header";
import Modal from "../modal/Modal";
import Mint from "./../mint/Mint";
import Content from "./content/Content";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="main">
      <Header setShow={setShowModal} />
      <img src={logo} alt="logo" className="logo" />
      <Content />
      <Modal show={showModal} setShow={setShowModal}>
        <Mint setShow={setShowModal} />
      </Modal>
    </div>
  );
};

export default Main;
