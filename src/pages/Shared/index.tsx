import { Roles, RoutesType } from "../../types";

import Shared from "./container/Shared";
import SharedIndex from "./routes/SharedIndex";
import SharedNested from "./routes/SharedNested/SharedNested";
import SharedNestedIndex from "./routes/SharedNested/SharedNestedIndex";
import SharedNestedView from "./routes/SharedNested/SharedNestedView";
import SharedView from "./routes/SharedView";

const Route: RoutesType = {
    path: "shared",
    roles: [Roles.User, Roles.Admin],
    component: Shared,
    order: 5,
    menuVisible: true,
    isSelected: false,
    iconName: "shared",
    title: "Shared",
    children: [
        {
            index: true,
            roles: [Roles.Admin, Roles.User],
            component: SharedIndex,
            title: "Shared Index"
        },
        {
            path: "view",
            roles: [Roles.Admin, Roles.User],
            component: SharedView,
            title: "Shared View"
        },
        {
            path: "nested",
            roles: [Roles.Admin],
            component: SharedNested,
            title: "Shared Nested",
            children: [
                {
                    index: true,
                    roles: [Roles.Admin],
                    component: SharedNestedIndex,
                    title: "Shared Nested Index"
                },
                {
                    path: "view",
                    roles: [Roles.Admin],
                    component: SharedNestedView,
                    title: "Shared Nested View"
                }
            ]
        }
    ]
};

export default Route;
