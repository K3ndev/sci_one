import { createClient } from '@/utils/supabase/cleint';

export const uploadImage = async ({ user_id, file }: { user_id: string,file: File }) => {
    const supabase = createClient()


    try {
        const { data, error } = await supabase
        .storage
        .from('profile_picture')
        .upload("public/" + user_id, file, { contentType: file.type, upsert: true})

        // const { error: errInsert } = await supabase
        // .from('user')
        // .update({ "avatar_url": data?.fullPath })
        // .eq( "id", user_id)
        // .select()

    } catch (error){
        console.error("Error uploading image:", error);

    }
};