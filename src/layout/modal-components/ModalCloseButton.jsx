import styled from "styled-components";

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: var(--color-grey-500);
    stroke: var(--color-grey-500);
    color: var(--color-grey-500);
  }
`;

export default ModalCloseButton;
