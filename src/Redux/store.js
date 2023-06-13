import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./tasksSlice";

export const store = configureStore({
    reducer:
    {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
});