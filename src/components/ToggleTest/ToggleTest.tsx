import React, { FC } from "react";
import withToggle from "../../hoc/withToggle";
import { Toggle } from "../../types";
import AppCompose from "../../utils/AppCompose";

const ToggleTest: FC = () => {
    return <div>ToggleTest</div>;
};

export default AppCompose<unknown, { toggle?: Toggle }>(withToggle)(ToggleTest);
