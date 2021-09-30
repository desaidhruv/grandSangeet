import React from 'react'
import { VStack, Image, Button, Text, Center, HStack, Box } from '@chakra-ui/react';
import community from '../../assets/photos/community.png'

function Community() {
    return (
        <VStack
            as={Center}
            h="800px"
            spacing="45px"
        >
            <Text fontSize="36px" fontWeight="medium">Join our community!</Text>
            <Text fontSize="33px" fontWeight="bold">Why to join us?</Text>
            <HStack spacing={'50px'} direction={["column", "row"]}>
                <VStack>
                    <Box boxShadow={'2xl'} w={'290px'} h={'530px'} rounded={'17px'} bg={'white'} >

                        <VStack spacing={'45px'}>
                        <Box as={Center} mt="20px">
                            <Image
                                src={community}
                            />
                        </Box>
                        <Text fontSize="24px" textAlign="center">Sell Everywhere</Text>
                        <Text fontSize="18px" color="#707070" textAlign="center">
                            Blazing fast web hosting for <br />
                            individuals and businesses of all <br />
                            sizes backed by 24x7x365 <br />
                            Support.Blazing fast web.
                        </Text>
                        <Text fontSize="18px" textAlign="center" color="#FF3B63">Learn more</Text>
                        </VStack>
                    </Box>
                </VStack>
                <VStack>
                    <Box boxShadow={'2xl'} w={'290px'} h={'530px'} rounded={'17px'} bg={'white'} >
                        <VStack spacing={'35px'}>

                        <Box as={Center} mt="20px">
                            <Image
                                src={community}
                            />
                        </Box>
                        <Text fontSize="24px" textAlign="center">Sell Everywhere</Text>
                        <Text fontSize="18px" color="#707070" textAlign="center">
                            Blazing fast web hosting for <br />
                            individuals and businesses of all <br />
                            sizes backed by 24x7x365 <br />
                            Support.Blazing fast web.
                        </Text>
                        <Text fontSize="18px" textAlign="center" color="#FF3B63">Learn more</Text>
                        </VStack>
                    </Box>
                </VStack>
                <VStack>
                    <Box boxShadow={'2xl'} w={'290px'} h={'530px'} rounded={'17px'} bg={'white'} >
                        <VStack spacing={'35px'}>

                        <Box as={Center} mt="20px">
                            <Image
                                src={community}
                            />
                        </Box>
                        <Text fontSize="24px" textAlign="center">Sell Everywhere</Text>
                        <Text fontSize="18px" color="#707070" textAlign="center">
                            Blazing fast web hosting for <br />
                            individuals and businesses of all <br />
                            sizes backed by 24x7x365 <br />
                            Support.Blazing fast web.
                        </Text>
                        <Text fontSize="18px" textAlign="center" color="#FF3B63">Learn more</Text>
                        </VStack>
                    </Box>
                </VStack>
                <VStack>
                    <Box boxShadow={'2xl'} w={'290px'} h={'530px'} rounded={'17px'} bg={'white'} >
                        <VStack spacing={'35px'}>

                        <Box as={Center} mt="20px">
                            <Image
                                src={community}
                            />
                        </Box>
                        <Text fontSize="24px" textAlign="center">Sell Everywhere</Text>
                        <Text fontSize="18px" color="#707070" textAlign="center">
                            Blazing fast web hosting for <br />
                            individuals and businesses of all <br />
                            sizes backed by 24x7x365 <br />
                            Support.Blazing fast web.
                        </Text>
                        <Text fontSize="18px" textAlign="center" color="#FF3B63">Learn more</Text>
                        </VStack>
                    </Box>
                </VStack>
            </HStack>
        </VStack>

    )
}

export default Community
