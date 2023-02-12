import { useReducer } from "react";

import { Action, ActionType, State } from "../types";

const initialState: State = {
    isAuthenticated: false,
    role: null
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.Authenticate:
            return { isAuthenticated: true, role: action.role };
        case ActionType.Deauthenticate:
            return { isAuthenticated: false, role: action.role };
        default:
            return state;
    }
};

const useAppProviderReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return { state, dispatch };
};

export default useAppProviderReducer;
