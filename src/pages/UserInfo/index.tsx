import { Roles, RoutesType } from "../../types";

import UserInfo from "./container/UserInfo";

const Route: RoutesType = {
    path: "info",
    roles: [Roles.User],
    component: UserInfo,
    order: 5,
    menuVisible: true,
    isSelected: false,
    iconName: "info",
    title: "Info"
};

export default Route;
