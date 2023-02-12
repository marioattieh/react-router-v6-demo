import React, { FC } from "react";

import { Navigate } from "react-router-dom";

interface Props {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
}

const ProtectedRoute: FC<Props> = ({ isAuthenticated, authenticationPath, outlet }) => {
    return isAuthenticated ? outlet : <Navigate to={authenticationPath} />;
};

export default ProtectedRoute;
