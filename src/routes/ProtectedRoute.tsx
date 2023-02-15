import React, { FC } from "react";

import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/useAppProvider";

interface Props {
    outlet: JSX.Element;
    defaultPath?: string;
}

const ProtectedRoute: FC<Props> = ({ defaultPath = "/", outlet }) => {
    const { isAuthenticated } = useAppContext();
    return isAuthenticated ? outlet : <Navigate to={defaultPath} />;
};

export default ProtectedRoute;
