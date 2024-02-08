import { HiXMark } from "react-icons/hi2";
import ModalContainer from "./modal-components/ModalContainer";
import ModalCloseButton from "./modal-components/ModalCloseButton";
import ModalOverlay from "./modal-components/ModalOverlay";

export default function Modal({ children, onClose }) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalCloseButton onClick={onClose}>
          <HiXMark />
        </ModalCloseButton>
        <div>{children}</div>
      </ModalContainer>
    </ModalOverlay>
  );
}
