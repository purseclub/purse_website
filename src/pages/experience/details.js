import React from "react";
import Detail from "../../components/Experience/Detail";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";
import Seo from "../../components/seo";

const Details = () => {
  return (
    <>
      <Seo
        description={
          "experience purse club, a card management app which rewards you eveytime you manage your cards."
        }
        title="PURSE CLUB EXPERIENCE HOME"
        meta="Alternative of your pocket purse"
        lang="en"
      />
      <ExperienceLayout>
        <Detail />
      </ExperienceLayout>
    </>
  );
};

export default Details;
