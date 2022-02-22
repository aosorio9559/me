import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

export const Footer = () => (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:aosorio9559@gmail.com">
          aosorio9559@gmail.com
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Alejandro Osorio Díaz - 2022 (Site under construction)</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons
          href="https://github.com/aosorio9559"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/alejandro-osorio-diaz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
);
