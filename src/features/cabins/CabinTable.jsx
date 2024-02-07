import { useQuery } from "@tanstack/react-query";
import CabinRow from "./CabinRow";
import Table from "./cabin-table-components/Table";
import TableHeader from "./cabin-table-components/TableHeader";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";

export default function CabinTable() {
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;

  return (
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
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}
