import { useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export function useToastHook() {
    const [state, setState] = useState(undefined);
    const toast = useToast();

    useEffect(() => {
        if (state) {
            const { message, status, title, position } = state;

            toast({
                title: title,
                description: message,
                status: status,
                duration: 3000,
                position: position,
                isClosable: true,
            });
        }
    }, [state, toast]);

    return [state, setState];
}