import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../Layout/MainNavigation"
import Footer from "../Layout/Footer";

const Root = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Root;
