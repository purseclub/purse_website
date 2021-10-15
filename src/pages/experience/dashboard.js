import { navigate } from "gatsby-link";
import React, { useEffect } from "react";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";
import PrivateRoute from "../../components/Experience/PrivateRoute";

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (
      !!location.state.uid &&
      location.pathname === `/experience/experienceHome`
    ) {
      navigate("/experience/experienceHome");
      return null;
    }
  }, [location.pathname, location.state.uid]);
  return (
    <>
      <ExperienceLayout>
        <PrivateRoute location={location} />
      </ExperienceLayout>
    </>
  );
};

export default Dashboard;
