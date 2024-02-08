import { useCabins } from "../../hooks/useCabins";
import CabinRow from "./CabinRow";
import Table from "./cabin-table-components/Table";
import TableHeader from "./cabin-table-components/TableHeader";
import Spinner from "../../ui/Spinner";

export default function CabinTable() {
  const { isLoading, cabins } = useCabins();

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
