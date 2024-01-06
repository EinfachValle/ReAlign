import React, { Fragment, useEffect, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoutes from "PrivateRoutes";

const ErrorLayout = React.lazy(() => import("./layouts/ErrorLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const AppLayout = React.lazy(() => import("./layouts/AppLayout"));

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
          <Route path="/error" element={<ErrorLayout />} />
          <Route path="/auth" element={<AuthLayout />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/app" element={<AppLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );

  return allowedRoutes;
};

export default AppRoutes;
