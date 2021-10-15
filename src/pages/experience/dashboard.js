import { navigate } from "gatsby-link";
import React from "react";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";
import PrivateRoute from "../../components/Experience/PrivateRoute";

const Dashboard = ({ location }) => {
  if (
    !!location.state.uid &&
    location.pathname == `/experience/experienceHome`
  ) {
    navigate("/experience/experienceHome");
    return null;
  }
  return (
    <>
      <ExperienceLayout>
        <PrivateRoute location={location} />
      </ExperienceLayout>
    </>
  );
};

export default Dashboard;
