import React from 'react'

function UserDetails({persons}) {
  return (
    <div>
        <p>First Name: {persons.name.first}</p>
        <p>Last Name: {persons.name.last}</p>
        <p>Email: {persons.email}</p>
        <p>Phone: {persons.phone}</p>

        <p
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden'
            }}
        >
            <img src={persons.picture.large} alt="user" />
        </p>
    </div>
  )
}

export default UserDetails