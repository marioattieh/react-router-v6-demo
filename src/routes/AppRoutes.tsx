import React, { useCallback, useMemo } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "../context/useAppProvider";
import useRoutes from "../hooks/useRoutes";
import Login from "../pages/Login/Login";
import { RoutesType } from "../types";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    const { isAuthenticated } = useAppContext();
    const routes = useRoutes();

    const defaultRoute = useMemo(
        () => ({
            path: "/",
            element: !isAuthenticated ? <Login /> : <Navigate to={routes[0].path || "/"} />
        }),
        [isAuthenticated, routes]
    );

    const nestedRoutes = useCallback(
        (routes: RoutesType[]) => {
            if (!isAuthenticated) return null;

            return routes.map((route) => (
                <Route
                    key={`${route.path}${route.component.displayName}`}
                    path={route.path}
                    index={route.index}
                    element={<ProtectedRoute outlet={<route.component title={route.title} />} />}>
                    {!!route.children && nestedRoutes(route.children)}
                </Route>
            ));
        },
        [isAuthenticated]
    );

    return (
        <Routes>
            <Route {...defaultRoute} />
            {nestedRoutes(routes)}
            <Route path="*" element={<Navigate to={defaultRoute.path} />} />
        </Routes>
    );
};

export default AppRoutes;
