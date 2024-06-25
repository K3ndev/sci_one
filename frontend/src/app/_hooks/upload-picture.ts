import { createClient } from "../../utils/supabase/cleint";
export const uploadImage = async ({ user_id, file }: { user_id: string,file: File }) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .storage
      .from('profile_picture')
      .upload("public/" + user_id, file)

    if (error) {
        console.error("Error uploading image:", error);
    } else {
        console.log("Image uploaded successfully:", data);
    }
};