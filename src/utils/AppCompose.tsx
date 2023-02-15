import { FC } from "react";

import { compose } from "@reduxjs/toolkit";
import { TitleProps } from "../types";

// eslint-disable-next-line @typescript-eslint/ban-types
const AppCompose = <T, U = TitleProps>(...args: Function[]) => compose<FC<T & U>>(...args);

export default AppCompose;
