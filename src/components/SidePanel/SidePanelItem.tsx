import React, { FC, useCallback } from "react";

import classNames from "classnames";

import { RoutesType } from "../../types";
import "./../../utils/Tooltip.css";
import "./SidePanel.css";
import { useNavigate } from "react-router-dom";

interface Props {
    route: RoutesType;
}

const SidePanelItem: FC<Props> = ({ route }) => {
    const navigate = useNavigate();
    const Icon = require(`../../icons/${route.iconName}.svg`);
    const className = classNames("tooltip", "sidepanel-image", {
        selected: route.isSelected
    });

    const onClick = useCallback(() => navigate(`/${route.path}`), [route]);

    if (!route.menuVisible) return null;

    return (
        <div className={className} onClick={onClick}>
            <img src={Icon} className="sidepanel-icon" />
            <div className="tooltiptext">{route.title}</div>
        </div>
    );
};

export default SidePanelItem;
