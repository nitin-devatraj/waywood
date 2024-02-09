import { useContext } from "react";
import { TableContext } from "../Table";
import StyledHeader from "./StyledHeader";

export default function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
