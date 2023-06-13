import { useDispatch } from "react-redux";
import { addContact } from "redux/operations";
import { Button } from "components/Button/Button";
import Css from "./ContactForm.module.css";

export const TaskForm = () =>
{
    const dispatch = useDispatch();

    const handleSubmit = event =>
    {
        event.preventDefault();
  
        const form = event.currentTarget;

        dispatch(addContact(event.currentTarget.elements.name.value, { phone_contact: event.currentTarget.elements.number.value }));

        form.reset();
    };
    return (
        <form className={Css.form} onSubmit={handleSubmit}>
            <label className={Css.form__label}>
                <span className={Css.form__span_text}>Name</span>
                <input className={Css.form__input_name} type="text" name="name"
                       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                       placeholder="Enter name" required/>
            </label>
            <label className={Css.form__label}>
                <span className={Css.form__span_text}>Number</span>
                <input className={Css.form__input_number} type="tel" name="number"
                       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                       placeholder="Enter number" required/>
            </label>
            <p className={Css.form__button_block}>
                <Button className={Css.form__button} type="submit">Add contact</Button>
            </p>
        </form>
    );
};