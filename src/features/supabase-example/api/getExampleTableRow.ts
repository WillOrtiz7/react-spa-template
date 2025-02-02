import { supabase } from "@/db/supabase";

export async function getExampleTableRow() {
  const { data, error } = await supabase.from("test").select("*").single();
  if (error) {
    throw error;
  }
  return data;
}
