import React from "react";
import PropTypes from "prop-types";
import Css from "./Feedback.module.css";

export const Feedback = ({ onClick }) =>
{
    return (
        <div className={Css.feedback__button_block}>
            <button className={Css.feedback__button} type="button" onClick={onClick}>Good</button>
            <button className={Css.feedback__button} type="button" onClick={onClick}>Neutral</button>
            <button className={Css.feedback__button} type="button" onClick={onClick}>Bad</button>
        </div>
    );
};
Feedback.propTypes =
{
    onClick: PropTypes.func.isRequired,
};