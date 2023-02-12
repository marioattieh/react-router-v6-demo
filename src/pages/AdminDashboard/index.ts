import { Roles, RoutesType } from "../../types";

import AdminDashboard from "./container/AdminDashboard";

const Route: RoutesType = {
    path: "dashboard",
    roles: [Roles.Admin],
    component: AdminDashboard,
    order: 0,
    menuVisible: true,
    isSelected: false,
    iconName: "dashboard",
    title: "Dashboard"
};

export default Route;
