import React, { FC, useCallback } from "react";

import classNames from "classnames";

import { RoutesType } from "../../types";
import "./../../utils/Tooltip.css";
import "./SidePanel.css";
import { useNavigate } from "react-router-dom";

const SidePanelItem: FC<{ route: RoutesType }> = ({ route }) => {
    const navigate = useNavigate();
    const Icon = require(`../../icons/${route.iconName}.svg`);
    const className = classNames("tooltip", "sidepanel-image", {
        selected: route.isSelected
    });

    const onClick = useCallback(() => navigate(`/${route.path}`), [route]);

    return (
        <div className={className} onClick={onClick}>
            <img src={Icon} />
            <div className="tooltiptext">{route.title}</div>
        </div>
    );
};

export default SidePanelItem;
