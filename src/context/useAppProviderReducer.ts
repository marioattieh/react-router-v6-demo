import React, { useReducer } from "react";

import { Action, ActionType, Roles, State } from "../types";

const initialState: State = {
    role: null
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.SetAdminRole:
            return { role: Roles.Admin };
        case ActionType.SetUserRole:
            return { role: Roles.User };
        case ActionType.ClearRole:
            return { role: null };
        default:
            return state;
    }
};

const useAppProviderReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return { state, dispatch };
};

export default useAppProviderReducer;
