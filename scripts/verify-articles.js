import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function verifyArticles() {
    try {
        const { data: articles, error } = await supabase
            .from('articles')
            .select('*');

        if (error) {
            throw error;
        }

        console.log('Found articles:', articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

verifyArticles(); 