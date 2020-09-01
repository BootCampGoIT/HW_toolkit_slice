import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: { items: [], filter: '', alert: false },
    reducers: {
        addContact: (state, action) => ({ ...state, items: [...state.items, action.payload] }),
        removeContact: (state, action) => ({ ...state, items: state.items.filter(contact => contact.id !== action.payload) }),
        getFilterValue: (state, action) => ({ ...state, filter: action.payload }),
        existContact: (state) => ({ ...state, alert: !state.alert })
    }
})

export const { addContact, removeContact, getFilterValue, existContact } = contactsSlice.actions;


export default contactsSlice;


const contacts = {
    state: {

    },
    getInitialState() {
        this.state = { items: [], filter: '', alert: false }
    },
    addContact (state, action) {
       this.state= { ...state, items: [...state.items, action.payload] }

    }


}