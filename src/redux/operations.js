import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://647b9dfed2e5b6101db17a76.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) =>
{
    try
    {
        const response = await axios.get("/contacts");
  
        return response.data;
    }
    catch (e)
    {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const addContact = createAsyncThunk("contacts/addContact", async (name_contact, phone_contact, thunkAPI) =>
{
    try
    {
        const response = await axios.post("/contacts", { name_contact }, { phone_contact });
        
        return response.data;
    }
    catch (e)
    {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) =>
{
    try
    {
        const response = await axios.delete(`/contacts/${contactId}`);
  
        return response.data;
    }
    catch (e)
    {
        return thunkAPI.rejectWithValue(e.message);
    }
});