import React from 'react'
import { VStack, Image, Text, Center, HStack, Box } from '@chakra-ui/react';
import services from '../../assets/photos/services.png'
import serviceLine from '../../assets/photos/serviceline.png'

function Services() {
    return (
        <VStack
            as={Center}
            h="500px"
        >
            <Text fontSize="36px" fontWeight="bold">Services We Provide</Text>
            <Image position={'absolute'} zIndex={'-1'} h="240px"
                src={serviceLine}
            />
            <HStack spacing={'120px'} direction={["column", "row"]}>
                <VStack>
                    <Box w={'180px'} h={'230px'} boxShadow={'2xl'} rounded={'17px'} bg={'white'} as={Center}>
                        <Image
                            src={services}
                        />
                    </Box>
                    <Text fontSize="30px">Wedding</Text>
                    <Text fontSize="18px" color="#707070" textAlign="center">
                        Blazing fast web hosting for individuals <br />
                        and businesses of all sizes backed by <br />
                        24x7x365 Support.Blazing fast web.
                    </Text>
                </VStack>
                <VStack>
                    <Box w={'180px'} h={'230px'} boxShadow={'2xl'} rounded={'17px'} bg={'white'} as={Center}>
                        <Image
                            src={services}
                        />
                    </Box>
                    <Text fontSize="30px" >Wedding</Text>
                    <Text fontSize="18px" color="#707070" textAlign="center">
                        Blazing fast web hosting for individuals <br />
                        and businesses of all sizes backed by <br />
                        24x7x365 Support.Blazing fast web.
                    </Text>
                </VStack>
                <VStack>
                    <Box w={'180px'} h={'230px'} boxShadow={'2xl'} rounded={'17px'} bg={'white'} as={Center}>
                        <Image
                            src={services}
                        />
                    </Box>
                    <Text fontSize="30px" >Wedding</Text>
                    <Text fontSize="18px" color="#707070" textAlign="center">
                        Blazing fast web hosting for individuals <br />
                        and businesses of all sizes backed by <br />
                        24x7x365 Support.Blazing fast web.
                    </Text>
                </VStack>
            </HStack>
        </VStack>

    )
}

export default Services
