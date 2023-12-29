import React, { Fragment, useEffect, Suspense } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

const Home = React.lazy(() => import("./views/home.js"));

const StorybookRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("http://localhost:6006/");
  }, [navigate]);

  return <></>;
};

const isDev = process.env.NODE_ENV === "development";

/**
 *
 * @param {*} props
 * Do all the Routes related implementation in this component
 */

const AppRoutes = (props) => {
  let allowedRoutes = null;

  allowedRoutes = (
    <Fragment>
      <Suspense fallback={<div>Laden...</div>}>
        <Routes>
          {isDev && <Route path="/storybook" element={<StorybookRoute />} />}
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Fragment>
  );

  return allowedRoutes;
};

export default AppRoutes;
