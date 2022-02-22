import React from "react";
import { DiAngularSimple, DiMongodb, DiPhp } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponentsStyles/GlobalComponentsStyles";
import {
  PrimaryText,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

export const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      These are some of the technologies I&apos;ve <PrimaryText>worked</PrimaryText> with &
      dabbled with so far
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAngularSimple size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ul>
            <ListParagraph primaryText>HTML & CSS</ListParagraph>
            <ListParagraph primaryText>Angular 2+</ListParagraph>
            <ListParagraph primaryText>JavaScript</ListParagraph>
            <ListParagraph>React.js</ListParagraph>
            <ListParagraph>Next.js</ListParagraph>
          </ul>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPhp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ul>
            <ListParagraph primaryText>PHP</ListParagraph>
            <ListParagraph>Node.js</ListParagraph>
            <ListParagraph>Python</ListParagraph>
          </ul>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ul>
            <ListParagraph primaryText>MongoDB</ListParagraph>
            <ListParagraph primaryText>SQL Server</ListParagraph>
            <ListParagraph>PostgreSQL</ListParagraph>
            <ListParagraph>MySQL</ListParagraph>
          </ul>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);
