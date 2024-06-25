'use client';

import React, {useEffect} from 'react'
import SignOutButton from "./logout/logoutButton"
import {useProfileStore} from "../_stores/use-profile"
import Upload from "../_components/upload"

export default  function Nav ({email, id}: {email: string | undefined, id : string | undefined}) {

    const {currentUser, setProfile} = useProfileStore()

    useEffect(() => {
        setProfile({email, id})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (    
        <nav> 
            <p>Account: {currentUser.email}</p>
            <p>uuid: {currentUser.id}</p>
            <Upload />
            <SignOutButton />
        </nav>
    )
}