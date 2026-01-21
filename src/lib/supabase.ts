import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.https://fgohsfbvxunypadmustm.supabase.co;
const supabaseAnonKey = import.meta.env.sb_publishable_cOxxiQmErP7u0yW7zoGHmA_qsqhH3W-;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

