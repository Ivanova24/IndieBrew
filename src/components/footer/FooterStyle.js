import styled from "styled-components";
import { respondTo } from "../../common/_respondTo";

export const FooterSection = styled.footer`
  background-color: var(--color-bg);
  padding: 66px var(--wrapper) 66px;
  display: flex;
  flex-direction: column;
  row-gap: 26px;

  ${respondTo.sm`
    flex-direction: row; 
    justify-content: space-between; 
  `}
`;

export const FooterText = styled.article`
  display: grid;
  row-gap: 8px;

  p {
    color: var(--color-footer-text);
    margin-bottom: 24px;
  }

  ${respondTo.sm`
     max-width: 38.1rem;
  `}
`;

export const FooterLinks = styled.article`
display: flex;
row-gap: 40px;
flex-wrap: wrap;
justify-content: space-between;
column-gap: 6rem;
`;

export const FooterContent = styled.div`
  display: grid;
  row-gap: 8px;
  font-family: var(--font-footer);

  h3 {
    margin-bottom: 8px;
  }

  a {
    color: var(--color-footer-text)
  }
`;
