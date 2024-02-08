import { HiPencil, HiTrash } from "react-icons/hi2";
import CabinName from "./cabin-row-components/CabinName";
import CabinImg from "./cabin-row-components/CabinImg";
import TableRow from "./cabin-row-components/TableRow";
import CabinPrice from "./cabin-row-components/CabinPrice";
import CabinDiscount from "./cabin-row-components/CabinDiscount";
import EditCabinForm from "./EditCabinForm";
import Modal from "../../layout/Modal";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "../../hooks/useDeleteCabin";
import ConfirmDelete from "../../ui/ConfirmDelete";

export default function CabinRow({ cabin }) {
  const { isDeleting, mutateDeleteCabin } = useDeleteCabin();

  return (
    <TableRow key={cabin.id} role="row">
      <CabinImg src={cabin.image} />
      <CabinName>{cabin.name}</CabinName>
      <div>fits upto {cabin.maxCapacity} guests</div>
      <CabinPrice>{formatCurrency(cabin.regularPrice)}</CabinPrice>
      <CabinDiscount>{formatCurrency(cabin.discount)}</CabinDiscount>
      <div>
        <Modal>
          <Modal.Open opens="edit">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <EditCabinForm cabinData={cabin} />
          </Modal.Window>
          <Modal.Open>
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window>
            <ConfirmDelete
              resourceName="cabin"
              disabled={isDeleting}
              onConfirm={() => mutateDeleteCabin(cabin.id)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </TableRow>
  );
}
