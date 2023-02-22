import { FC } from "react";

import { compose } from "@reduxjs/toolkit";
import { HocProps } from "../types";

// eslint-disable-next-line @typescript-eslint/ban-types
const AppCompose = <T, U = HocProps>(...args: Function[]) => compose<FC<T & U>>(...args);

export default AppCompose;
