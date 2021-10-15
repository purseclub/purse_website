import { navigate } from "gatsby-link";
import React, { useEffect, useState } from "react";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";
import PrivateRoute from "../../components/Experience/PrivateRoute";

const Dashboard = ({ location }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, setState] = useState({});

  useEffect(() => {
    //const len = Object.keys(location.state).length;
    if (location.state !== null) {
      setIsLoggedIn(true);
      setState({ ...location });
    } else if (
      !isLoggedIn &&
      location.pathname !== `/experience/experienceHome`
    ) {
      navigate("/experience/experienceHome");
      return null;
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn && (
        <ExperienceLayout>
          <PrivateRoute state={state} />
        </ExperienceLayout>
      )}
    </>
  );
};

export default Dashboard;
