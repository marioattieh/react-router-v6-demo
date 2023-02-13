import React from "react";
import { Outlet } from "react-router-dom";
import withTitle from "../../../hoc/withTitle";
import AppCompose from "../../../utils/AppCompose";

const Shared = () => {
    return <Outlet />;
};

export default AppCompose(withTitle)(Shared);
