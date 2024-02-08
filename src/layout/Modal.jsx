import { HiXMark } from "react-icons/hi2";
import ModalContainer from "./modal-components/ModalContainer";
import ModalCloseButton from "./modal-components/ModalCloseButton";
import ModalOverlay from "./modal-components/ModalOverlay";
import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openWindowName, setOpenWindowName] = useState("");
  const close = () => setOpenWindowName("");
  const open = setOpenWindowName;

  return (
    <ModalContext.Provider value={{ openWindowName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }) {
  const { openWindowName, close } = useContext(ModalContext);
  const windowRef = useOutsideClick(close);

  if (openWindowName !== name) return null;

  return createPortal(
    <ModalOverlay>
      <ModalContainer ref={windowRef}>
        <ModalCloseButton onClick={close}>
          <HiXMark />
        </ModalCloseButton>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
