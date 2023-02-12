import { Dispatch } from "react";

export enum Roles {
    Admin,
    User
}

export interface State {
    role: Roles | null;
    isAuthenticated: boolean;
}

export enum ActionType {
    Authenticate,
    Deauthenticate
}

export interface Action {
    type: ActionType;
    role: Roles | null;
}

export interface AppContextType extends State {
    dispatch: Dispatch<Action>;
}
