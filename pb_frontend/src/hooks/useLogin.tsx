import React from 'react'
import pb from '@src/lib/pocketbase'
import { useMutation } from 'react-query'

export interface FormData {
    email: string;
    password: string;
}

export default function useLogin() {
    const login = async (data: FormData) => {
        // Try catch block not needed thanks to useMutation hook
        const response = await pb.collection('users').authWithPassword(data.email, data.password);
        console.log(response);
    }

    return useMutation(login);
}
