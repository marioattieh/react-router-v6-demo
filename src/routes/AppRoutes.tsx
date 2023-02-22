import React, { useCallback, useMemo } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "../context/useAppProvider";
import useRoutes from "../hooks/useRoutes";
import Login from "../pages/Login/Login";
import { RoutesType } from "../types";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    const { isAuthenticated, role } = useAppContext();
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

            return routes.reduce((acc: JSX.Element[], route) => {
                const key = `${route.path}${route.component.displayName}`;
                const element = <ProtectedRoute outlet={<route.component title={route.title} />} />;
                if (!route.roles?.includes(role)) return acc;

                if (route.index) acc.push(<Route key={key} element={element} index />);

                acc.push(
                    <Route key={key} element={element} path={route.path}>
                        {route.children && nestedRoutes(route.children)}
                    </Route>
                );

                return acc;
            }, []);
        },
        [isAuthenticated, role]
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
