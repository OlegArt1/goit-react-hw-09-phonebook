import { useSelector } from "react-redux";
import { selectContactsCount, selectVisibleContacts, selectFilteredContacts } from "redux/selectors";

export const useContacts = () =>
{
    return useSelector(selectFilteredContacts);
};
export const useVisibleContacts = () =>
{
    return useSelector(selectVisibleContacts);
};
export const useContactsCount = () =>
{
    return useSelector(selectContactsCount);
};