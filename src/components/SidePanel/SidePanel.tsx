import React from "react";

import useRoutes from "../../hooks/useRoutes";

import "./SidePanel.css";
import SidePanelItem from "./SidePanelItem";

const SidePanel = () => {
    const routes = useRoutes();

    return (
        <div className="sidepanel-container">
            {routes.map((route, index) => {
                const key = `${route.path}${index}`;
                return <SidePanelItem key={key} route={route} />;
            })}
        </div>
    );
};

export default SidePanel;
