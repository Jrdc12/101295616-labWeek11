import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import UserDetails from "./UserDetails";

function PersonList() {
	const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res);
                setPersons(res.data.results);
            })
    }, []);

    // get user by id
    const getUserById = (id) => {
        console.log(id)
        return persons.find(person => person.login.uuid === id);
    }

	return (
        <>
            <h1>Person List</h1>
            {
                persons.map(person => (
                    <UserDetails key={person.login.uuid} persons={person} />
                ))
            }
            <button onClick={getUserById}>Get user</button>
        </>
	);
}

export default PersonList;
