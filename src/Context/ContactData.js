import React,{useState, createContext, useReducer, useEffect} from 'react';
import {ContactReducer} from "../Reducer/ContactReducer";
export const ContactData = createContext()

const ContactDataProvider = (props) => {
    const [contacts, dispatch] = useReducer(ContactReducer, [
        // {id:1, name:"test1", email:"test1@gmail.com", phone:"434465465"},
        // {id:2, name:"test2", email:"test2@gmail.com", phone:"434465465"},
        // {id:3, name:"test3", email:"test3@gmail.com", phone:"434465465"},
        // {id:4, name:"test4", email:"test4@gmail.com", phone:"434465465"},
    ], ()=>{
        const localData = localStorage.getItem('contacts');
        return localData?JSON.parse(localData):[]
    })

    useEffect(()=>{
        localStorage.setItem('contacts', JSON.stringify(contacts))
    },[contacts])

  
    return (
        <ContactData.Provider value={{contacts, dispatch}}>
            {props.children}
        </ContactData.Provider>
    )
}

export default ContactDataProvider
