import { useState } from "react";
import CabinName from "./cabin-row-components/CabinName";
import CabinImg from "./cabin-row-components/CabinImg";
import TableRow from "./cabin-row-components/TableRow";
import CabinPrice from "./cabin-row-components/CabinPrice";
import CabinDiscount from "./cabin-row-components/CabinDiscount";
import EditCabinForm from "./EditCabinForm";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "../../hooks/useDeleteCabin";
import { HiSquare2Stack, HiPencil, HiTrash } from "react-icons/hi2";

export default function CabinRow({ cabin }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const { isDeleting, mutateDeleteCabin } = useDeleteCabin();

  return (
    <>
      <TableRow key={cabin.id} role="row">
        <CabinImg src={cabin.image} />
        <CabinName>{cabin.name}</CabinName>
        <div>fits upto {cabin.maxCapacity} guests</div>
        <CabinPrice>{formatCurrency(cabin.regularPrice)}</CabinPrice>
        <CabinDiscount>{formatCurrency(cabin.discount)}</CabinDiscount>
        <div>
          <button>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowEditForm((show) => !show)}>
            <HiPencil />
          </button>
          <button
            disabled={isDeleting}
            onClick={() => mutateDeleteCabin(cabin.id)}
          >
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showEditForm && <EditCabinForm cabinData={cabin} />}
    </>
  );
}
