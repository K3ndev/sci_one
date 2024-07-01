'use client';

import React, {useEffect} from 'react'
import SignOutButton from "../logout/logout-button"
import {useProfileStore} from "../../_stores/use-profile"
import Upload from "../uploads/upload"
import { useProfileImage } from './_hooks/get-profile-url';

export default  function Nav ({email, id}: {email: string | undefined, id : string | undefined}) {

    const {currentUser, setProfile} = useProfileStore()

    // console.log(currentUser.id)
    const data = useProfileImage(currentUser.id)
    
    useEffect(() => {
        setProfile({email, id})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (    
        <nav> 
            <p>Account: {currentUser.email}</p>
            {/* append id to rerender the component*/}
            <img src={`${data.publicUrl}`} alt="avatar" width={100} height={100}/>
            <p>uuid: {currentUser.id}</p>
            <Upload />
            <SignOutButton />
        </nav>
    )
}