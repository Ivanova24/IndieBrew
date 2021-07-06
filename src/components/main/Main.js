import React from "react";
import { MainSection, Resources, Article } from "./MainStyle";

export const contentSection = [
  {
    id: 1,
    image: "/assets/social-media-icons.png",
    alt: "Social media icons",
    title: "Curate your feed from dozens of resources.",
    text: "We cover all major platforms where one could want to curate their feed from. Reddit, ProductHunt, IndieHackers, and so much more.",
    link: "See full list of resources →",
    order: true, 
  },
  {
    id: 2,
    image: "/assets/phone-mockup.png",
    alt: "Phone mockup",
    title: "Access your feed from the comfort of your phone.",
    text: "With native apps for both iOS and Android, accessing your curated content has never been easier.",
    link: "Sign up for the waitlsit →",
    order: false, 
  },
];

const Main = () => {
  return (
    <MainSection>
      { 
        contentSection.map(contentSection => (
        <Resources key={contentSection.id}>
          <img src={contentSection.image} alt={contentSection.alt} />
          <Article>
            <h2>{contentSection.title}</h2>
            <p>{contentSection.text}</p>
            <a href="/">{contentSection.link}</a>
          </Article>
        </Resources>
        ))
      }
    </MainSection>
  );
};

export default Main;
