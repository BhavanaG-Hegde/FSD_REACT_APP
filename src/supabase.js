import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://odhmmwlentllwatsjplt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kaG1td2xlbnRsbHdhdHNqcGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NTg3MjAsImV4cCI6MjA2MjQzNDcyMH0.P-YZcWGk7c_YUtarN9HwtjzUdo9PQPl3XEG79LkiCJw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
