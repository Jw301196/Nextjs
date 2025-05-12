import { supabase } from "./supabaseClient";

//get all logins

export async function getAllLogins(){
  const { data, error} = await supabase
    .from('Login')
    .select('*')

  if (error) throw error
  return data
}

