import { createClient } from "../../utils/supabase/cleint";

export const getProfileImage = (id: string | undefined) => {
    const supabase = createClient();

    // no policies, change this
    const { data  } = supabase
      .storage
      .from('profile_picture')
      .getPublicUrl(`public/${id}`)

    return data
};