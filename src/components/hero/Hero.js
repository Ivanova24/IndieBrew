import React from "react";
import { HeroSection, Header, Img, Nav, Section, Article } from "./HeroStyle";
import Button from "../../common/Button";

const Hero = () => {
  return (
    <HeroSection>
      <Header>
        <img src={"/assets/logo.svg"} alt="IndieBrew" />
        <Nav>
          <a href="/">Pricing</a>
          <a href="/">Support</a>
          <Button>
            Get Started <span>— it’s free</span>
          </Button>
        </Nav>
        <img src={"/assets/hamburger-menu.svg"} alt="Hamburger Menu" />
      </Header>

      <Section>
        <Img>
          <img src={"/assets/feed-mockup.png"} alt="Feed Mockup" />
        </Img>
        <Article>
          <h1>Your weekly personal feed digest.</h1>
          <p>
            With IndieBrew, get personal feeds from resources all around the
            web, including Reddit, HackerNews, IndieHackers, and much more.
          </p>
          <Button>
            Get Started <span>— it’s free</span>
          </Button>
          <img src={"/assets/user-avatars.svg"} alt="User Avatars" />
          <p>
            Join <span>32,642</span> IndieBrewers in curating their personal
            digest.
          </p>
        </Article>
      </Section>
    </HeroSection>
  );
};

export default Hero;
