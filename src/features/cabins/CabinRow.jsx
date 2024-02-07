import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CabinName from "./cabin-row-components/CabinName";
import CabinImg from "./cabin-row-components/CabinImg";
import TableRow from "./cabin-row-components/TableRow";
import CabinPrice from "./cabin-row-components/CabinPrice";
import CabinDiscount from "./cabin-row-components/CabinDiscount";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import EditCabinForm from "./EditCabinForm";

export default function CabinRow({ cabin }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: mutateDeleteCabin } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      <TableRow key={cabin.id} role="row">
        <CabinImg src={cabin.image} />
        <CabinName>{cabin.name}</CabinName>
        <div>fits upto {cabin.maxCapacity} guests</div>
        <CabinPrice>{formatCurrency(cabin.regularPrice)}</CabinPrice>
        <CabinDiscount>{formatCurrency(cabin.discount)}</CabinDiscount>
        <div>
          <button onClick={() => setShowEditForm((show) => !show)}>edit</button>
          <button
            disabled={isDeleting}
            onClick={() => mutateDeleteCabin(cabin.id)}
          >
            delete
          </button>
        </div>
      </TableRow>
      {showEditForm && <EditCabinForm cabinData={cabin} />}
    </>
  );
}
