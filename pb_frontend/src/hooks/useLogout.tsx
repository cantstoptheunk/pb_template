import React, { useState } from 'react'
import pb from '@src/lib/pocketbase'


export default function useLogout() {
    function logout(reset: () => void) {
        pb.authStore.clear();
        reset();
    }

    return { logout }
}
