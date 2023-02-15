import React from "react";
import ToggleTest from "../../../components/ToggleTest/ToggleTest";

import withTitle from "../../../hoc/withTitle";
import { Toggle } from "../../../types";
import AppCompose from "../../../utils/AppCompose";

const SharedView = () => {
    return (
        <div style={{ padding: "30px" }}>
            <ToggleTest />
            <ToggleTest toggle={Toggle.Off} />
        </div>
    );
};

export default AppCompose(withTitle)(SharedView);
