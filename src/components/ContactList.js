import React from 'react';
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";


const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const contacts = [
        {
            id: "1",
            name: "Gorgio",
            email: "gorgio@mail.com"
        },
    ];
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                key={contact.id}
                clickHandler={deleteContactHandler}
            />
        );
    });

    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui  button blue  right">Add Contact</button>
            </Link>
            <div className="ui celled list">
                {renderContactList}
            </div>

        </div>
    );
};

export default ContactList;