import React, { FC } from "react";

import useAppProvider from "./useAppProvider";
import useAppProviderReducer from "./useAppProviderReducer";

const AppProvider: FC<{ children: JSX.Element }> = ({ children }) => {
    const { state, dispatch } = useAppProviderReducer();
    const Provider = useAppProvider();

    return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export default AppProvider;
