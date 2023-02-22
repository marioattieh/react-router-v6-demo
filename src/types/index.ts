import { Dispatch, FC } from "react";

export enum Roles {
    None = "None",
    Admin = "Admin",
    User = "User"
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

export interface PathRoutesType {
    index?: false;
    path?: string;
    roles?: Roles[];
    order?: number;
    disabled?: boolean;
    menuVisible?: boolean;
    isSelected?: boolean;
    iconName?: string;
    title?: string;
    component: FC<Record<string, unknown> & HocProps>;
    children?: RoutesType[];
}

export interface IndexRoutesType extends Omit<PathRoutesType, "index"> {
    index: true;
    children?: never;
}

export type RoutesType = PathRoutesType | IndexRoutesType;

export interface HocProps {
    title?: string;
    toggle?: Toggle;
}
