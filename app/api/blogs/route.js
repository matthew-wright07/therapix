import { createClient } from '@supabase/supabase-js'

export async function GET(){
    const supabaseUrl = 'https://akvzybgbkvfuyckqckyy.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)
    const { data } = await supabase.from('blog').select('*').limit(10)
    return new Response(JSON.stringify(data))

}