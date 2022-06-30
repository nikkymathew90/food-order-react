import { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./components/backdrop";
import ModalOverlay from "./components/modalOverlay";

const portalTarget = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.hideCart} />,
        portalTarget
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalTarget
      )}
    </Fragment>
  );
};

export default Modal;
