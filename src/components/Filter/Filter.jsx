import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filtersSlice";
import { selectFilter } from "redux/selectors";
import Css from "./Filter.module.css";

export const Filter = () =>
{
    const dispatch = useDispatch();
  
    const filter = useSelector(selectFilter);

    return (
        <div className={Css.filter}>
            <label className={Css.filter__label}>
                <span className={Css.filter__span_text}>Filter</span>
                <input className={Css.filter__input_name} type="text" name="filter" value={filter}
                       placeholder="Enter name" onChange={event => dispatch(setFilter(event.target.value.trim()))}/>
            </label>
        </div>
    );
};