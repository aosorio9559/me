import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponentsStyles/GlobalComponentsStyles";
import { LeftSection } from "./MainTitleStyles";

export const MainTitle = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Website
        </SectionTitle>
        <SectionText>
          Hey! My name is Alejandro Osorio Díaz. I&apos;m a software developer with skills
          in front-end, back-end and database technologies (See below). I have
          experience in designing and developing web applications for companies
          in the hydropower sector as well as educational institutions. Come see my work!
        </SectionText>
      </LeftSection>
    </Section>
  );
};
