import { useContacts } from "hooks";
import { ContactListItem } from "components/ContactList/ContactList";
import Css from "./ContactList.module.css";
import AppCss from "../App.module.css";

export const ContactList = () =>
{
    const contacts = useContacts();

    return (
        <div className={Css.contact}>
            {contacts.length !== 0 ?
                <ul className={Css.contact__list}>
                    {contacts.map(contact =>
                    {
                        return (
                            <li className={Css.contact__item} key={contact.id}>
                                <ContactListItem contact={contact}/>
                            </li>
                        )
                    })}
                </ul>
                :
                <h1 className={AppCss.title_error}>Contacts is not found!</h1>
            }
        </div>        
    );
};