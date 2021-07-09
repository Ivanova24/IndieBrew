import styled from "styled-components";
import { respondTo } from "../../common/_respondTo";

export const MainSection = styled.main`
  padding: 21px var(--wrapper) 80px;
  display: grid;
  row-gap: 59px;

  ${respondTo.sm`
    padding-top: 80px;
    padding-bottom: 80px; 
    row-gap: 64px;
  `}

  ${respondTo.md`
    row-gap: 80px;
  `}
`;

export const Resources = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  ${respondTo.sm`
    flex-direction: ${({row}) => (row ? "row-reverse" : "row")};
    column-gap: 8vw; 
    align-items: center;
  `}
`;

export const Img = styled.div`
${respondTo.xs`
    max-width: 60%;
    margin: 0 auto;
  `}

  ${respondTo.sm`
    max-width: 40vw;
  `}

  ${respondTo.md`
    max-width: 30vw;
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
