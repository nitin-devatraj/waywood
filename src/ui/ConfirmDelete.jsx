import ConfirmDeleteContainer from "./confirm-delete-components/ConfirmDeleteContainer";
import Button from "./Button";
import Heading from "./Heading";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <ConfirmDeleteContainer>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </ConfirmDeleteContainer>
  );
}

export default ConfirmDelete;
