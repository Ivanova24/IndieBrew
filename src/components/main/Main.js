import React from "react";
import { MainSection, Resources, Article, Img } from "./MainStyle";

export const content = [
  {
    id: 1,
    image: "/assets/social-media-icons.png",
    alt: "Social media icons",
    title: "Curate your feed from dozens of resources.",
    text: "We cover all major platforms where one could want to curate their feed from. Reddit, ProductHunt, IndieHackers, and so much more.",
    link: "See full list of resources →",
    row: true,
  },
  {
    id: 2,
    image: "/assets/phone-mockup.png",
    alt: "Phone mockup",
    title: "Access your feed from the comfort of your phone.",
    text: "With native apps for both iOS and Android, accessing your curated content has never been easier.",
    link: "Sign up for the waitlsit →",
    row: false,
  },
];

const Main = () => {
  return (
    <MainSection>
      {content.map((content) => (
        <Resources key={content.id} row={content.row}>
          <Img>
            <img src={content.image} alt={content.alt} />
          </Img>
          <Article>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
            <a href="/">{content.link}</a>
          </Article>
        </Resources>
      ))}
    </MainSection>
  );
};

export default Main;
