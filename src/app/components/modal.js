import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { setShowModal } from "../../actions";
import close from "../assets/close.png";
export default function Modal() {
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setShowModal());
  };
  if(showModal) {
      document.body.style.overflow = "hidden";
  } else {
      document.body.style.overflow= "auto"
  }
  return (
    <CSSTransition
      unmountOnExit
      in={showModal}
      timeout={600}
      classNames="modal"
    >
      <div className="modal">
        <div className="overlay" onClick={closeModal}></div>
        <div className="modal__body">
          <div className="modal__head">
            <h2 className="title modal__title">Congratulations</h2>
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="modal__close"
            >
              <img src={close} alt="Close button" />
            </button>
          </div>
          <div className="modal__text p">
            <p>You have successfully passed the registration</p>
          </div>
          <div className="modal__bottom">
            <button onClick={closeModal} className="modal__button button">
              Great
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
