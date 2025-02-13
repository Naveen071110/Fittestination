import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xedgsrjpbezxslfwmtvv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlZGdzcmpwYmV6eHNsZndtdHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3Mzk2ODQsImV4cCI6MjA1NDMxNTY4NH0.TIkjg0QgGlEhN-B0N6KOSUXhqGH6U68Yj5jvIEBcsZ8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
