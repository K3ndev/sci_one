
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export const addResume = async({text, filePath, authHeader}: {text: string, filePath: string, authHeader: string}) => {
    let token = authHeader.replace(/^Bearer\s+/, '');

    await supabase.auth.setSession({access_token: token, refresh_token: token})
    console.log(await supabase.auth.getUser())

    // check if the resume is exist
    const { data: existingResumes, error: queryError } = await supabase
        .from('resume')
        .select('file_name')
        .eq('file_name', filePath)

    if (queryError) {
        throw queryError;
    }

    // delete the existing one
    if (existingResumes.length > 0) {

        const { error: deleteError } = await supabase
                .from('resume')
                .delete()
                .eq('file_name', existingResumes[0].file_name);

        if (deleteError) {
            throw deleteError;
        }
    }
    
    const { error } = await supabase
        .from('resume')
        .insert([
        { file_name: filePath, text: text },
        ])
        .select()

    if (error){
        // console.log(error)
        throw error
    }
} 

export const searchKeywords = async(query: string, authHeader: string) => {

    const { data } = await supabase
        .from('resume')
        .select('text, file_name')
        .textSearch('text', query)

        // you can also use like query <sub>string 

    return data
}