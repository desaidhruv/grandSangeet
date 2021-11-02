import React from 'react'
import { Image, Box, Center } from '@chakra-ui/react';
import gsLoading from '../assets/photos/gs loading 1.gif'
function Loading() {
    return (
        <>
            {/* <Box display="flex" justifyContent="center" alignItems="center" h={'100vh'} w={'100%'}> */}
            <Box as={Center} h={'100vh'} w={'100%'} backgroundColor="#FBEBF0">
                <Image src={gsLoading} h="100vh"/>
            </Box>
        </>
    )
}

export default Loading
