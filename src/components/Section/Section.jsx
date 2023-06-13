import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Feedback } from "components/Feedback/Feedback";
import { Statistic } from "components/Statistic/Statistic";
import { Notification } from "components/Notification/Notification";
import Css from "./Section.module.css";
/*
    export const StatisticContext = createContext();
    export const UseStatistic = () => useContext(StatisticContext);
*/
export const Section = () =>
{
    const [ goodValue, setGoodValue ] = useState(0);
    const [ neutralValue, setNeutralValue ] = useState(0);
    const [ badValue, setBadValue ] = useState(0);
    const [ totalValue, setTotalValue ] = useState(0);
    const [ percentageValue, setPercentageValue ] = useState(0);
    
    const onLeaveFeedback = (value) =>
    {
        if (value.target.textContent === 'Good')
        {
            setGoodValue(goodValue + 1);
            totalValueStatistic();
            setPercentageValue(100 * (goodValue + 1) / ((goodValue + neutralValue + badValue) + 1));
        }
        else if (value.target.textContent === 'Neutral')
        {
            setNeutralValue(neutralValue + 1);
            totalValueStatistic();
            percentageValueStatistic();
        }
        else if (value.target.textContent === 'Bad')
        {
            setBadValue(badValue + 1);
            totalValueStatistic();
            percentageValueStatistic();
        }
    };
    const totalValueStatistic = () =>
    {
        setTotalValue((goodValue + neutralValue + badValue) + 1);
    };
    const percentageValueStatistic = () =>
    {
        setPercentageValue(100 * goodValue / ((goodValue + neutralValue + badValue) + 1));
    };
/*
    <StatisticContext.Provider
        value={{ goodValue, neutralValue, badValue, totalValue, percentageValue,
                 goodStatistic, neutralStatistic, badStatistic,
                 totalValueStatistic, percentageValueStatistic }}>
            {children}
    </StatisticContext.Provider>
*/
    return (
        <div>
            <h1 className={Css.feedback__title}>Please leave feedback</h1>
            <Feedback onClick={onLeaveFeedback}/>
            {goodValue > 0 || neutralValue > 0 || badValue > 0 || totalValue > 0 || percentageValue > 0 ?
            <div className={Css.feedback__block}>
                <Statistic good={goodValue} neutral={neutralValue} bad={badValue} total={totalValue} percentage={percentageValue}/>
            </div>
            :
            <Notification/>}
        </div>
    );
};
Section.propTypes =
{
    title: PropTypes.string.isRequired,
};