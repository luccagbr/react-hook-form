import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://auroqvigwodzmyhqfphl.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1cm9xdmlnd29kem15aHFmcGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0ODExMjgsImV4cCI6MjAwNDA1NzEyOH0.leOh5y5tkcjn7dC-fW46j9gS_dADySxWUw-8m9Y8YJQ'
)