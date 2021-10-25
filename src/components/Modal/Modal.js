import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClick, largeImage }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  // componentDidMount() {
  //   // console.log("sds");
  //   window.addEventListener("keydown", this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   // console.log("saas");
  //   window.removeEventListener("keydown", this.handleKeyDown);
  // }

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClick();
    }
  };

  const handleBackdropClose = (event) => {
    if (event.currentTarget === event.target) {
      onClick();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClose}>
      <div className={s.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
