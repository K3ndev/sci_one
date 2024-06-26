'use client';

import React, {useEffect} from 'react'
import SignOutButton from "../logout/logout-button"
import {useProfileStore} from "../../_stores/use-profile"
import Upload from "../uploads/upload"
import { getProfileImage } from './_hooks/get-profile-url';

export default  function Nav ({email, id}: {email: string | undefined, id : string | undefined}) {

    const {currentUser, setProfile} = useProfileStore()

    const data = getProfileImage(currentUser.id)
    
    useEffect(() => {
        setProfile({email, id})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (    
        <nav> 
            <p>Account: {currentUser.email}</p>
            <img src={data.publicUrl} alt="avatar" />
            <p>uuid: {currentUser.id}</p>
            <Upload />
            <SignOutButton />
        </nav>
    )
}