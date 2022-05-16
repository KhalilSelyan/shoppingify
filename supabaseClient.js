import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rnjwejhdtpuwtgblipki.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuandlamhkdHB1d3RnYmxpcGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI0MzEwNjksImV4cCI6MTk2ODAwNzA2OX0._SUnGYNgsRs8cnHUwBl9q8enrMzv2hhk58WeQJ74NpM";

export const supabase = createClient(supabaseUrl, supabaseKey);
