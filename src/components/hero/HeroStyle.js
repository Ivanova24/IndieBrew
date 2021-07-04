import styled from "styled-components";
import { respondTo } from "../../common/_respondTo";

export const HeroSection = styled.section`
  padding: 40px var(--wrapper) 150px;
  background: linear-gradient(
    90deg,
    var(--color-primary-landing) 30%,
    var(--color-secondary) 80%
  );

  ${respondTo.md`
    padding-bottom: 189px;
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-bottom: 50px;
  justify-content: space-between;

  ${respondTo.sm`
    img:last-child {
      display: none; 
    }
  `}

  ${respondTo.md`
    padding-bottom: 89px;
  `}
`;

export const Nav = styled.nav`
  display: none;

  a {
    color: var(--color-black);
  }

  ${respondTo.sm`
    display: flex; 
    align-items: center; 
    column-gap: 2.4rem; 
  `}
`;

export const Section = styled.section`
  display: grid;
  row-gap: 42px;

  ${respondTo.md`
    grid-template-columns: 1fr 1fr; 
    align-items: center;
  `}
`;

export const Img = styled.div`
  max-width: 338px;
  margin: 0 auto;

  ${respondTo.md`
    max-width: 581px;
  `}
`;

export const Article = styled.article`
  display: grid;
  row-gap: 16px;

  h1 {
    font-size: var(--font-size-title);
    line-height: 60px;
  }

  img {
    margin-top: 16px;
  }

  p {
    span {
      color: var(--color-tertiary);
      font-weight: 700;
    }
  }

  ${respondTo.md`
    order: -1; 
  `}
`;
