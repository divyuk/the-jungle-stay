import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uyeivyzcmejtqtjpmtys.supabase.co";
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
