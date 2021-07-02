import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--color-tertiary);
  font-size: var(--font-size-body);
  font-family: var(--font-body);
  border-color: transparent;
  color: var(--color-white);
  padding: 1.9rem 1.9rem;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border: thin solid $color-black;
    background-color: $color-white;
    transition: all 0.5s ease;
    color: $color-black;
  }
`;
