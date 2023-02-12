import React, { FC } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "../context/useAppProvider";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
    const { isAuthenticated } = useAppContext();
    const defaultRoute = { path: "/", element: <Login /> };

    const AllRoutes: FC = () => {
        return null;
    };

    return (
        <Routes>
            <Route path={defaultRoute.path} element={defaultRoute.element} />
            {isAuthenticated && <AllRoutes />}
            <Route path="*" element={<Navigate to={defaultRoute.path} />} />
        </Routes>
    );
};

export default AppRoutes;
