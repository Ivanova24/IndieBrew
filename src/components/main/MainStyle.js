import styled from "styled-components";
import { respondTo } from "../../common/_respondTo";
// import { contentSection } from "./Main";

export const MainSection = styled.section`
  padding: 21px var(--wrapper) 80px;
  display: grid;
  row-gap: 59px;

  ${respondTo.sm`
    padding-top: 80px;
    padding-bottom: 80px; 
  `}
`;

export const Resources = styled.article`
  display: grid;
  row-gap: 32px;

  ${respondTo.md`
    grid-template-columns: 1fr 1fr;
    column-gap: 2.2rem; 
    align-items: center;
  `}
`;

export const Article = styled.article`
  display: grid;
  row-gap: 8px;
  

  h2 {
    font-size: var(--font-size-subtitle);
    line-height: 46.87px;
  }

  a {
    font-weight: 700;
  }
`;

