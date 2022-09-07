import { createClient } from '@supabase/supabase-js';
import axios from 'axios'

const _supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_PUBLIC_ANON_KEY || '');

const AUTH_API_URL = process.env.AUTH_API_URL;

const handleApiPost = async (endpoint, params) => {
    const result = await axios.post(`${AUTH_API_URL}/${endpoint}`, params, {
        headers: {
            'content-type': 'application/json',
        },
    });

    return result.data;
};

export const requestMessage = (account, chain) =>
    handleApiPost('request-message', {
        address: account,
        chain: chain,
        network: 'evm',
    });

export const verifyMessage = (message, signature) =>
    handleApiPost('sign-message', {
        message,
        signature,
        network: 'evm',
    });

export const getUser = async (token) => {
    _supabase.auth.setAuth(token);
    const { data } = await _supabase.from('users').select('*');
    return data;
};