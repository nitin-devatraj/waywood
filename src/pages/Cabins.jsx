import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCabins, getCabins } from "../services/apiCabins";
import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Table from "../features/cabins/Table";
import TableHeader from "../features/cabins/TableHeader";
import TableRow from "../features/cabins/TableRow";
import CabinImg from "../features/cabins/CabinImg";
import CabinName from "../features/cabins/Cabin";
import CabinPrice from "../features/cabins/CabinPrice";
import CabinDiscount from "../features/cabins/CabinDiscount";
import { formatCurrency } from "../utils/helpers";

function Cabins() {
  const queryClient = useQueryClient();

  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / sort</p>
      </Row>

      <Row>
        <Table role="table">
          <TableHeader role="row">
            <div></div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
            <div></div>
          </TableHeader>
          {cabins.map((cabin) => (
            <TableRow key={cabin.id} role="row">
              <CabinImg src={cabin.image} />
              <CabinName>{cabin.name}</CabinName>
              <div>fits upto {cabin.maxCapacity} guests</div>
              <CabinPrice>{formatCurrency(cabin.regularPrice)}</CabinPrice>
              <CabinDiscount>{formatCurrency(cabin.discount)}</CabinDiscount>
              <button disabled={isDeleting} onClick={() => mutate(cabin.id)}>
                delete
              </button>
            </TableRow>
          ))}
        </Table>
      </Row>
    </>
  );
}

export default Cabins;
