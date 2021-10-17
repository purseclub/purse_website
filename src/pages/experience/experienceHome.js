import React from "react";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";
import Home from "../../components/Experience/Home";
import Seo from "../../components/seo";

const ExperienceHome = () => {
  return (
    <>
      <Seo
        description={
          "Experience purse club, A card management app which rewards you eveytime you manage your cards."
        }
        title="EXPERIENCE HOME"
        meta="Alternative of your pocket purse"
        lang="en"
      />
      <ExperienceLayout>
        <Home />
      </ExperienceLayout>
    </>
  );
};

export default ExperienceHome;
