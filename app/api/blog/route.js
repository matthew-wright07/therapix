import { createClient } from '@supabase/supabase-js'

export async function POST(req){
    const pageData = await req.json()
    const name = pageData.name
    const supabaseUrl = 'https://akvzybgbkvfuyckqckyy.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)
    const { data } = await supabase.from('blog').select('*').eq('url', name)
    return new Response(JSON.stringify(data[0]))

}