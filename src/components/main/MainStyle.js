import styled from "styled-components";
import { respondTo } from "../../common/_respondTo";

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
  row-gap: 23px;
`;

export const Article = styled.article`
  display: grid;
  row-gap: 8px;
`;

