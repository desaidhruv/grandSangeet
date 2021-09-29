import React from 'react';
import { Box, Flex,Image, Text,Center, Link, HStack, Spacer,Heading,Button } from '@chakra-ui/react';
import logo from "../assets/photos/logo.svg"
export default function Navbar() {
  return (
    <Flex  pt="20px" pb="20px" pl="40px" pr="40px">
    <Box  as={Center}>
      <Image h="84px" w="78px" src={logo}/>
    </Box>
    <Spacer />
    <HStack color="white" spacing="20px">
      <Button variant="outline" >
        Home
      </Button>
      <Button variant="outline" >About us</Button>
      <Button variant="outline">
        Gallery
      </Button>
      <Button variant="outline">Contact</Button>
    </HStack>
  </Flex>
  );
} 
