import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import Css from "./ContactList.module.css";

export const ContactListItem = ({ contact }) =>
{
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <>
            <label className={Css.contact__label}>
                <b className={Css.contact__text_name}>Name:&nbsp;&nbsp;&nbsp;</b>
                <span className={Css.contact__text_span}>{contact.name_contact};</span>
            </label>
            <label className={Css.contact__label}>
                <b className={Css.contact__text_name}>Phone:&nbsp;&nbsp;&nbsp;</b>
                <span className={Css.contact__text_span}>{contact.phone_contact};</span>
            </label>
            <button id={contact.id} className={Css.contact__button} type="button" onClick={handleDelete}>X</button>
            <br/><br/><br/>
        </>
    );
};