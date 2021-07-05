import React from "react";
import { MainSection, Resources, Article } from "./MainStyle";
import icons from "../../assets/social-media-icons.png";
import phone from "../../assets/phone-mockup.png";

const content = [
  {
    id: 1,
    image: icons,
    alt: "IndieBrew",
    title: "Curate your feed from dozens of resources.",
    text: "We cover all major platforms where one could want to curate their feed from. Reddit, ProductHunt, IndieHackers, and so much more.",
    link: "See full list of resources →",
  },
  {
    id: 2,
    image: phone,
    alt: "Phone Mockup",
    title: "Access your feed from the comfort of your phone.",
    text: "With native apps for both iOS and Android, accessing your curated content has never been easier.",
    link: "Sign up for the waitlsit →",
  },
];

const Main = () => {
  return (
    <MainSection>
      { 
        content.map(content => (
        <Resources key={content.id}>
          <img src={content.image} alt={content.alt} />
          <Article>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <a href="/">{content.link}</a>
          </Article>
        </Resources>
        ))
      }
    </MainSection>
  );
};

export default Main;
