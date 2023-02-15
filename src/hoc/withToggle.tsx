import React, { FC } from "react";
import { Toggle } from "../types";

interface Props {
    toggle?: Toggle;
}

const withToggle = <T extends Props>(Component: FC<T>) => {
    const TitleWrapper = (props: T) => {
        if (props.toggle === Toggle.Off) return null;
        return <Component {...props} />;
    };

    return TitleWrapper;
};

export default withToggle;
