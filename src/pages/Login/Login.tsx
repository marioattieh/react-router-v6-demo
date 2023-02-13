import React, { ChangeEvent, useCallback, useState, KeyboardEvent } from "react";
import { useAppContext } from "../../context/useAppProvider";
import { ActionType, Roles } from "../../types";

import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { dispatch } = useAppContext();

    const onUsernameChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
        []
    );

    const onPasswordChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
        []
    );

    const hanldeLoginClick = useCallback(() => {
        if (username === "admin" && password === "admin")
            dispatch({ type: ActionType.Authenticate, role: Roles.Admin });
        else dispatch({ type: ActionType.Authenticate, role: Roles.User });
    }, [username, password]);

    const keyDownHanlder = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") hanldeLoginClick();
        },
        [hanldeLoginClick]
    );

    return (
        <div className="login-container">
            <input
                type="text"
                id="appUsername"
                aria-describedby="appUsername"
                value={username}
                onChange={onUsernameChange}
                onKeyDown={keyDownHanlder}
                className="login-inputs"
                placeholder="Username"
            />
            <input
                type="password"
                id="appPassword"
                aria-describedby="appPassword"
                value={password}
                onChange={onPasswordChange}
                onKeyDown={keyDownHanlder}
                className="login-inputs"
                placeholder="Password"
            />
            <div onClick={hanldeLoginClick} className="login-button">
                LOGIN
            </div>
        </div>
    );
};

export default Login;
