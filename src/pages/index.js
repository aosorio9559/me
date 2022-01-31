import React from "react";
import { MainTitle } from "../components/MainTitle/MainTitle";
import { Projects } from "../components/Projects/Projects";
import { Technologies } from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponentsStyles/GlobalComponentsStyles";

const Home = () => (
  <Layout>
    <Section grid>
      <MainTitle />
    </Section>
    <Projects />
    <Technologies />
  </Layout>
);

export default Home;
