import React from 'react'
import { VStack, Image, Button, Text, Center, HStack } from '@chakra-ui/react';
import Rohan from '../../assets/photos/Rohan.png'
import { Divider } from './Divider';

function Team() {
    return (
        <VStack
            as={Center}
            h="600px"
            spacing="35px"
        >
            <Text fontSize="48px" fontWeight="bold">Meet Our Team</Text>
            <HStack spacing={'40px'} direction={["column", "row"]}>
                <VStack>
                        <Image
                            src={Rohan}
                        />
                    <Text fontSize="24px">Rohan Pharek</Text>
                </VStack>
                <VStack>
                        <Image
                            src={Rohan}
                        />
                    <Text fontSize="24px" >Rohan Pharek</Text>
                </VStack>
                <VStack>
                        <Image
                            src={Rohan}
                        />
                    <Text fontSize="24px" >Rohan Pharek</Text>
                </VStack>
                <VStack>
                        <Image
                            src={Rohan}
                        />
                    <Text fontSize="24px" >Rohan Pharek</Text>
                </VStack>
            </HStack>
            <Divider/>
        </VStack>

    )
}

export default Team
