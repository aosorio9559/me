import React from "react";
import { projects } from "../../data/data";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponentsStyles/GlobalComponentsStyles";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";

export const Projects = () => (
  <Section id="projects">
    <SectionDivider divider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ image, title, description, visit, source, tags }, index) => (
          <BlogCard key={index}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree titles>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            {/* <UtilityList>
              <li>
                <ExternalLinks href={visit}>Code</ExternalLinks>
              </li>
              <li>
                <ExternalLinks href={source}>Source</ExternalLinks>
              </li>
            </UtilityList> */}
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);
