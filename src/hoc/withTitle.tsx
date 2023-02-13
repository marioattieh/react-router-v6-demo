import React, { FC } from "react";

interface Props {
    title?: string;
    disclaimerMessage?: string;
}

const withTitle = <T extends Props>(Component: FC<T>) => {
    const TitleWrapper = (props: T) => {
        return (
            <>
                <h1 style={{ margin: 0, padding: 30, marginLeft: "5vw" }}>{props.title}</h1>
                <Component {...props} />
            </>
        );
    };

    return TitleWrapper;
};

export default withTitle;
