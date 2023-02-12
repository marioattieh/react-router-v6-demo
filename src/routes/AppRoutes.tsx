import React, { cloneElement, useCallback } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "../context/useAppProvider";
import useRoutes from "../hooks/useRoutes";
import Login from "../pages/Login/Login";
import { RoutesType } from "../types";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    const { isAuthenticated } = useAppContext();
    const routes = useRoutes();

    const defaultRoute = {
        path: "/",
        element: !isAuthenticated ? <Login /> : <Navigate to={routes[0].path || "/"} />
    };

    const allRoutes = useCallback(
        (routes?: RoutesType[]) => {
            if (!routes?.length) return null;

            return routes.map((route) => {
                const component = cloneElement(<route.component />, { title: route.title });

                return (
                    <Route
                        key={String(route.path) + component.key}
                        path={route?.index ? undefined : route.path}
                        index={route.index}
                        element={
                            <ProtectedRoute
                                isAuthenticated={isAuthenticated}
                                authenticationPath={defaultRoute.path}
                                outlet={component}
                            />
                        }>
                        {allRoutes(route.children)}
                    </Route>
                );
            });
        },
        [isAuthenticated, defaultRoute]
    );

    return (
        <Routes>
            <Route path={defaultRoute.path} element={defaultRoute.element} />
            {isAuthenticated && allRoutes(routes)}
            <Route path="*" element={<Navigate to={defaultRoute.path} />} />
        </Routes>
    );
};

export default AppRoutes;
