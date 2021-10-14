import React from "react";
import Detail from "../../components/Experience/Detail";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";

const Details = ({ location }) => {
  return (
    <>
      <ExperienceLayout>
        <Detail state={location.state} />
      </ExperienceLayout>
    </>
  );
};

export default Details;
