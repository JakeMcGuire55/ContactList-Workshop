import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function SelectedContact({ setSelectedContactId, selectedContactId }) {
    const [contact, setContact] = useState('')
    console.log("Contact: ", contact)
    useEffect(() => {
        async function fetchContact(){
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const data = await response.json();
                setContact(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchContact()
    },[])
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact Information</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-header">
                    <td>Name: </td>
                    <td>Email: </td>
                    <td>Phone: </td>
                </tr>
                    {
                        <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
                    }
            </tbody>
        </table>
        <button onClick={()=>{
            setSelectedContactId(null)
        }}>Return to List </button>
        </>
    );
}
