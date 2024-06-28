import { createClient } from '@/utils/supabase/cleint';
import {useEffect, useState} from "react"

export const useProfileImage = (id: string | undefined) => {
    const supabase = createClient()
    // const [urlAvatar, setUrlAvatar] = useState<string>('')

    const { data  } = supabase
      .storage
      .from('profile_picture')
      .getPublicUrl(`public/${id}`)

    // think here 
    // const filterProfile = async() => {
    //   const { data: user } = await supabase
    //   .from('user')
    //   .select("*")
    //   .eq('id', id)

    //   if (user) {
    //     setUrlAvatar(user[0].avatar_url)
    //   }

    // }

    // useEffect(() => {
    //   if(id){
    //     filterProfile()
    //   }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [id])

    // console.log(data)
    return data
};