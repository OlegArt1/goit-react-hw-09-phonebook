import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/constants";
import { selectFilter } from "redux/selectors";
import { setFilter } from "redux/filtersSlice";
import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () =>
{
    const dispatch = useDispatch();
  
    const filter = useSelector(selectFilter);

    const handleFilterChange = filter => dispatch(setFilter(filter));

    return (
        <div className={css.wrapper}>
            <Button selected={filter === statusFilters.all} onClick={() => handleFilterChange(statusFilters.all)}>
                All
            </Button>
            <Button selected={filter === statusFilters.active} onClick={() => handleFilterChange(statusFilters.active)}>
                Active
            </Button>
            <Button selected={filter === statusFilters.completed} onClick={() => handleFilterChange(statusFilters.completed)}>
                Completed
            </Button>
        </div>
    );
};