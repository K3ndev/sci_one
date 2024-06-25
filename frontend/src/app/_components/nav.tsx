'use client';

import React, {useEffect} from 'react'
import SignOutButton from "./logout/logoutButton"
import {useProfileStore} from "../_stores/use-profile"

export default  function Nav ({email, id}: {email: string | undefined, id : string | undefined}) {

    const {currentUser, setProfile} = useProfileStore()

    useEffect(() => {
        setProfile({email, id})
    }, [])

    return (
        <nav> 
            <p>Account: {currentUser.email}</p>
            <p>uuid: {currentUser.id}</p>
            <SignOutButton />
        </nav>
    )
}