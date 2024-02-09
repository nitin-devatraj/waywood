import { useContext } from "react";
import { TableContext } from "../Table";
import StyledRow from "./StyledRow";

export default function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}
