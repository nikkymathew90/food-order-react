import classes from "./modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./components/backdrop";
import ModalOverlay from "./components/modalOverlay";

const portalTarget = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalTarget)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalTarget
      )}
    </Fragment>
  );
};

export default Modal;
