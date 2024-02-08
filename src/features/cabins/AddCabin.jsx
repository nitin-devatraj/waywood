import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../layout/Modal";
import { createPortal } from "react-dom";

export default function AddCabin() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div>
      <Button onClick={() => setShowModal((show) => !show)}>
        add new cabin
      </Button>
      {showModal &&
        createPortal(
          <Modal onClose={closeModal}>
            <CreateCabinForm onCloseModal={closeModal} />
          </Modal>,
          document.body
        )}
    </div>
  );
}
