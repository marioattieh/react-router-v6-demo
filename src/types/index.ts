import { Dispatch, FC } from "react";

export enum Roles {
    Admin = "Admin",
    User = "User",
    None = "None"
}

export enum ActionType {
    Authenticate,
    Deauthenticate
}

export enum Toggle {
    On,
    Off
}

export interface Action {
    type: ActionType;
    role?: Roles;
}

export interface State {
    role: Roles;
    isAuthenticated: boolean;
}

export interface AppContextType extends State {
    dispatch: Dispatch<Action>;
}

export interface RoutesType {
    index?: boolean;
    path?: string;
    roles: Roles[];
    order?: number;
    disabled?: boolean;
    menuVisible?: boolean;
    isSelected?: boolean;
    iconName?: string;
    title?: string;
    component: FC<Record<string, unknown> & TitleProps>;
    children?: RoutesType[];
}

export interface TitleProps {
    title?: string;
}
