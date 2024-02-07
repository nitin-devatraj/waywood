import CabinName from "./cabin-row-components/CabinName";
import CabinImg from "./cabin-row-components/CabinImg";
import TableRow from "./cabin-row-components/TableRow";
import CabinPrice from "./cabin-row-components/CabinPrice";
import CabinDiscount from "./cabin-row-components/CabinDiscount";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function CabinRow({ cabin }) {
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
    <TableRow key={cabin.id} role="row">
      <CabinImg src={cabin.image} />
      <CabinName>{cabin.name}</CabinName>
      <div>fits upto {cabin.maxCapacity} guests</div>
      <CabinPrice>{formatCurrency(cabin.regularPrice)}</CabinPrice>
      <CabinDiscount>{formatCurrency(cabin.discount)}</CabinDiscount>
      <button disabled={isDeleting} onClick={() => mutateDeleteCabin(cabin.id)}>
        delete
      </button>
    </TableRow>
  );
}
