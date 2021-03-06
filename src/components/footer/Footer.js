import React from "react";
import {
  FooterSection,
  FooterText,
  FooterLinks,
  FooterContent,
} from "./FooterStyle";

export const content = [
  {
    id: 1,
    title: "Sitemap",
    linkOne: "Homepage",
    linkTwo: "Pricing",
  },
  {
    id: 2,
    title: "Resources",
    linkOne: "Support",
    linkTwo: "Contact",
    linkThree: "FAQ",
  },
  {
    id: 3,
    title: "Company",
    linkOne: "About",
    linkTwo: "Customers",
    linkThree: "Blog",
  },
  {
    id: 4,
    title: "Resources",
    linkOne: "HackerNews",
    linkTwo: "Reddit",
    linkThree: "Twitter",
  },
];

const Footer = () => {
  return (
    <FooterSection>
      <FooterText>
        <h3>IndieBrew</h3>
        <p>
          With IndieBrew, get personal feeds from resources all around the web,
          including Reddit, HackerNews, and much more.
        </p>
        <p>Made with ❤️ in the UK.</p>
      </FooterText>
     
        <FooterLinks>
        {content.map((content) => (
          <FooterContent key={content.id}>
            <h3>{content.title}</h3>
            <a href="/">{content.linkOne}</a>
            <a href="/">{content.linkTwo}</a>
            <a href="/">{content.linkThree}</a>
          </FooterContent>
      ))}
      </FooterLinks>
    </FooterSection>
  );
};

export default Footer;
