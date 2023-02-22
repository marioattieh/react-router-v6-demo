import React, { FC } from "react";
import withToggle from "../../hoc/withToggle";
import AppCompose from "../../utils/AppCompose";

const ToggleTest: FC = () => {
    return <div>ToggleTest</div>;
};

export default AppCompose(withToggle)(ToggleTest);
