import { Modal as ModalB } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalActions";

export default function Modal({ children }) {
  console.log("hola mundoi");

  const dispatch = useDispatch();
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  const isOpenModal = useSelector((state) => state.modals.stateModalAddTweet);

  return (
    <ModalB
      show={isOpenModal}
      size="lg"
      centered
      onHide={() => closeModal(false)}
    >
      {children}
    </ModalB>
  );
}
