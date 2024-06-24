import React from 'react'
import SignOutButton from "./logout/logoutButton"

export default  function Nav ({email}: {email: string | undefined}) {


    return (
        <nav> 
            <p>Account: {email}</p>
            <SignOutButton />
        </nav>
    )
}