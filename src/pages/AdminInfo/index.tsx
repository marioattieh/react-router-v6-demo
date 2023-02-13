import { Roles, RoutesType } from "../../types";

import AdminInfo from "./container/AdminInfo";

const Route: RoutesType = {
    path: "info",
    roles: [Roles.Admin],
    component: AdminInfo,
    order: 5,
    menuVisible: true,
    isSelected: false,
    iconName: "info",
    title: "Info"
};

export default Route;
