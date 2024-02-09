import StyledBody from "./StyledBody";
import Empty from "./Empty";

export default function Body({ data, render }) {
  if (!data.length) return <Empty>no data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}
