import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import { Layout } from "components/Layout/Layout";
import { TaskForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactListItem";
import { Filter } from "components/Filter/Filter";
import Css from "./App.module.css";

export let name_text = '';

export const App = () =>
{
    const dispatch = useDispatch();
  
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() =>
    {
        dispatch(fetchContacts());
  
    }, [dispatch]);

    return (
        <Layout>
            <h1 className={Css.title_phonebook}>Phonebook</h1>
            <TaskForm/>
            <h1 className={Css.title_contact}>Contacts</h1>
            <Filter/>
            {isLoading && !error && <b className={Css.text_error}>Request in progress...</b>}
            <ContactList/>
        </Layout>
    );
};