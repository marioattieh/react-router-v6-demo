import { createContext, useContext } from "react";

import { AppContextType } from "../types";

const AppContext = createContext<AppContextType>({} as AppContextType);

AppContext.displayName = "AppContext";

const Provider = AppContext.Provider;

export function useAppContext() {
    const table = useContext<AppContextType>(AppContext);

    return table;
}

const useAppProvider = () => {
    return Provider;
};

export default useAppProvider;
