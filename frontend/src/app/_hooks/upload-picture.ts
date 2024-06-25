import { createClient } from "../../utils/supabase/cleint";
export const uploadImage = async ({ user_id, file }: { user_id: string,file: File }) => {
    const supabase = createClient();

    // no policies, change this
    const { data, error } = await supabase
      .storage
      .from('profile_picture')
      .upload("public/" + user_id, file, { contentType: file.type, upsert: true})

    if (error) {
        console.error("Error uploading image:", error);
    } else {
        console.log("Image uploaded successfully:", data);
    }
};