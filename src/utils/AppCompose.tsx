import { FC } from "react";

import { compose } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppCompose = (...args: any[]) => compose<FC>(...args);

export default AppCompose;
