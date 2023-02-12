import { Dispatch } from "react";

export enum Roles {
    Admin,
    User
}

export interface State {
    role: Roles | null;
}

export enum ActionType {
    SetAdminRole,
    SetUserRole,
    ClearRole
}

export interface Action {
    type: ActionType;
}

export interface AppContextType {
    dispatch: Dispatch<Action>;
    role: Roles | null;
}
