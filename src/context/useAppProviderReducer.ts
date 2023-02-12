import { useReducer } from "react";

import { Action, ActionType, Roles, State } from "../types";

const initialState: State = {
    isAuthenticated: !!localStorage.getItem("isAuthenticated"),
    role: localStorage.getItem("role") as Roles
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.Authenticate:
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("role", action.role ? action.role.toString() : initialState.role);
            return { isAuthenticated: true, role: action.role || initialState.role };
        case ActionType.Deauthenticate:
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("role");
            return { isAuthenticated: false, role: Roles.None };
        default:
            return state;
    }
};

const useAppProviderReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return { state, dispatch };
};

export default useAppProviderReducer;
