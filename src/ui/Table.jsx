import Header from "./table-components/Header";
import Body from "./table-components/Body";
import Row from "./table-components/Row";
import StyledFooter from "./table-components/StyledFooter";
import StyledTable from "./table-components/StyledTable";
import { createContext } from "react";

export const TableContext = createContext();

export default function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = StyledFooter;
