import { Roles, RoutesType } from "../../types";

import AdminProfile from "./container/AdminProfile";

const Route: RoutesType = {
    path: "profile",
    roles: [Roles.Admin],
    component: AdminProfile,
    order: 10,
    menuVisible: false,
    isSelected: false,
    iconName: "profile",
    title: "Profile"
};

export default Route;
