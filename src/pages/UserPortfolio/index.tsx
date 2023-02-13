import { Roles, RoutesType } from "../../types";

import UserPortfolio from "./container/UserPortfolio";

const Route: RoutesType = {
    path: "portfolio",
    roles: [Roles.User],
    component: UserPortfolio,
    order: 0,
    menuVisible: true,
    isSelected: false,
    iconName: "portfolio",
    title: "Portfolio"
};

export default Route;
