import React from 'react';
import {
    VStack,
    Image,
    Button,
    Text,
    Center,
    Flex,
    HStack,
    Box,
} from '@chakra-ui/react';
import community from '../../assets/photos/community.png';
import { Divider } from './Divider';

function Community() {
    return (
        <>
            <VStack as={Center} h="800px" spacing="45px">
                <Text fontSize="36px" fontWeight="medium">
                    Join our community!
                </Text>
                <Text fontSize="33px" fontWeight="bold">
                    Why to join us?
                </Text>
                <Flex justify="space-evenly" w="90%">
                    <VStack
                        boxShadow="5px 5px 11px 0px #0000001A"
                        w={'290px'}
                        h={'530px'}
                        rounded={'17px'}
                        bg={'white'}
                        as={Center}
                    >
                        <VStack spacing={'25px'}>
                            <Box as={Center} mt="20px">
                                <Image src={community} />
                            </Box>
                            <Text fontSize="24px" textAlign="center">
                                Sell Everywhere
                            </Text>
                            <Text fontSize="18px" color="#707070" textAlign="center">
                                Blazing fast web hosting for <br />
                                individuals and businesses of all <br />
                                sizes backed by 24x7x365 <br />
                                Support.Blazing fast web.
                            </Text>
                            <Text fontSize="18px" textAlign="center" color="#FF3B63">
                                Learn more
                            </Text>
                        </VStack>
                    </VStack>
                    <VStack
                        boxShadow="5px 5px 11px 0px #0000001A"
                        w={'290px'}
                        h={'530px'}
                        rounded={'17px'}
                        bg={'white'}
                        as={Center}
                    >
                        <VStack spacing={'25px'}>
                            <Box as={Center} mt="20px">
                                <Image src={community} />
                            </Box>
                            <Text fontSize="24px" textAlign="center">
                                Sell Everywhere
                            </Text>
                            <Text fontSize="18px" color="#707070" textAlign="center">
                                Blazing fast web hosting for <br />
                                individuals and businesses of all <br />
                                sizes backed by 24x7x365 <br />
                                Support.Blazing fast web.
                            </Text>
                            <Text fontSize="18px" textAlign="center" color="#FF3B63">
                                Learn more
                            </Text>
                        </VStack>
                    </VStack>
                    <VStack
                        boxShadow="5px 5px 11px 0px #0000001A"
                        w={'290px'}
                        h={'530px'}
                        rounded={'17px'}
                        bg={'white'}
                        as={Center}
                    >
                        <VStack spacing={'25px'}>
                            <Box as={Center} mt="20px">
                                <Image src={community} />
                            </Box>
                            <Text fontSize="24px" textAlign="center">
                                Sell Everywhere
                            </Text>
                            <Text fontSize="18px" color="#707070" textAlign="center">
                                Blazing fast web hosting for <br />
                                individuals and businesses of all <br />
                                sizes backed by 24x7x365 <br />
                                Support.Blazing fast web.
                            </Text>
                            <Text fontSize="18px" textAlign="center" color="#FF3B63">
                                Learn more
                            </Text>
                        </VStack>
                    </VStack>
                    <VStack
                        boxShadow="5px 5px 11px 0px #0000001A"
                        w={'290px'}
                        h={'530px'}
                        rounded={'17px'}
                        bg={'white'}
                        as={Center}
                    >
                        <VStack spacing={'25px'}>
                            <Box as={Center} mt="20px">
                                <Image src={community} />
                            </Box>
                            <Text fontSize="24px" textAlign="center">
                                Sell Everywhere
                            </Text>
                            <Text fontSize="18px" color="#707070" textAlign="center">
                                Blazing fast web hosting for <br />
                                individuals and businesses of all <br />
                                sizes backed by 24x7x365 <br />
                                Support.Blazing fast web.
                            </Text>
                            <Text fontSize="18px" textAlign="center" color="#FF3B63">
                                Learn more
                            </Text>
                        </VStack>
                    </VStack>
                </Flex>
            </VStack>
            <VStack height="300px" w="full" spacing="30px" as={Center}>
                <Text textAlign="center" fontSize={['30px']}>
                    Join our community <br /> to help you grow as choreographers.
                </Text>
                <HStack spacing="30px">
                    <Button color="white" bgColor="brand.100" size="lg">
                        Join now
                    </Button>
                    <Button variant="outline" size="lg" color="brand.100">
                        {' '}
                        Learn more
                    </Button>
                </HStack>
            </VStack>
            <Divider />
        </>
    );
}

export default Community;
