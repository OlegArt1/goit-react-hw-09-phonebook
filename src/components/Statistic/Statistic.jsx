import React from "react";
import PropTypes from "prop-types";
import Css from "./Statistic.module.css";

export const Statistic = ({ good, neutral, bad, total, percentage }) =>
{
    return (
        <div className={Css.feedback__block_text}>
            <h2 className={Css.feedback__statistic_title}>Statistics</h2>
            <div className={Css.feedback__block_span}>
                <label className={Css.feedback__label}>Good:</label>
                <span className={Css.feedback__span}>{good};</span>
            </div>
            <div className={Css.feedback__block_span}>
                <label className={Css.feedback__label}>Neutral:</label>
                <span className={Css.feedback__span}>{neutral};</span>
            </div>
            <div className={Css.feedback__block_span}>
                <label className={Css.feedback__label}>Bad:</label>
                <span className={Css.feedback__span}>{bad};</span>
            </div>
            <div className={Css.feedback__block_span}>
                <label className={Css.feedback__label}>Total:</label>
                <span className={Css.feedback__span}>{total};</span>
            </div>
            <div className={Css.feedback__block_span}>
                <label className={Css.feedback__label}>Positive feedback:</label>
                <span className={Css.feedback__span}>{percentage.toFixed()}%;</span>
            </div>
        </div>
    );
};
Statistic.propTypes =
{
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};