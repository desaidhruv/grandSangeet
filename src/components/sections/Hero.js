import { Box, Center, Heading, Button, VStack, Text, Icon, Flex, } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Navbar'
import bg from "../../assets/photos/bg.png"
import '@fontsource/poppins';
import './Hero.css'
import { FaArrowDown } from 'react-icons/fa'


export default function Hero() {
    return (
        <>
            <Box backgroundImage={bg} backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover" w="full" h="1024px">
                <Navbar />

                <Flex h="inherit" color="white" border="2px solid red" flexDirection="column">
                    <VStack spacing="20px" >

                        <Heading fontSize="96px">
                            Grand Sangeet
                        </Heading>
                        <Text fontFamily="Poppins" textAlign="center" fontSize="20px" h="65px" >
                            Blazing fast web hosting for individuals and businesses of all <br /> sizes backed by 24x7x365 Support.
                        </Text>
                        <Button bg="brand.100" size="l">
                            Book now
                        </Button>
                    </VStack>
                    <Box className="arrow bounce" alignItems="flex-end" justifyContent="center">
                        <Icon as={FaArrowDown} className="fa fa-arrow-down fa-2x" fontSize="35px" />
                    </Box>
                </Flex>

            </Box>

        </>
    )
}
