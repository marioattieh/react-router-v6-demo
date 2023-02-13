import React, { useCallback } from "react";

import AppRoutes from "./routes/AppRoutes";

import "./App.css";
import { useAppContext } from "./context/useAppProvider";
import { ActionType } from "./types";

const App = () => {
    const { isAuthenticated, dispatch } = useAppContext();

    const logout = useCallback(() => {
        dispatch({ type: ActionType.Deauthenticate });
    }, [dispatch]);

    return (
        <div className="app-container">
            {isAuthenticated && (
                <div onClick={logout} className="logout-button">
                    LOGOUT
                </div>
            )}
            <AppRoutes />
        </div>
    );
};

export default App;
