import React from "react";
import { useState } from "react";
import Css from "./Notification.module.css";

export const Notification = () =>
{
    const [message, setMessage] = useState('There is no feedback!');

    const Message = () =>
    {
        setMessage("\n", message);
    };
    return (
        <div onLoad={Message}>
            <h3 className={Css.feedback__notification}>{message}</h3>
        </div>        
    );
};