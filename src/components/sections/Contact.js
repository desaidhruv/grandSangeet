import {
  Flex,
  FormControl,
  Input,
  Box,
  Button,
  HStack,
  Center,
  VStack,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Divider } from './Divider';

export default function Contact() {
  return (
    <Box w="full">
      <Text fontSize="48px" h="150px" as={Center} fontWeight="medium">Contact us</Text>
      <Flex w="full" h="600px">
        <VStack  w="50%" w="50%" as={Center} spacing="60px">
          <HStack spacing="60px">
            <FormControl id="name">
              <FormLabel color="brand.100">Full Name</FormLabel>
              <Input variant="flushed" type="name" />
            </FormControl>
            <FormControl id="email">
              <FormLabel color="brand.100">Email</FormLabel>
              <Input variant="flushed" type="name" />
            </FormControl>
          </HStack>
          <HStack spacing="60px">
            <FormControl id="phone">
              <FormLabel color="brand.100">Phone Number</FormLabel>
              <Input variant="flushed" type="name" />
            </FormControl>
            <FormControl id="email">
              <FormLabel color="brand.100">Date</FormLabel>
              <Input variant="flushed" type="name" />
            </FormControl>
          </HStack>
          <FormControl pl="160px" as={Center} id="email">
              <FormLabel color="brand.100">Date</FormLabel>
              <Input variant="flushed" type="name" />
            </FormControl>
            <Flex pl="300px" alignItems="flex-end">
                <Button size="lg"  bgColor="brand.100" color="white"> Send message</Button>
            </Flex>
        </VStack>

      <Box w="50%" >

      </Box>
      </Flex>
      <Divider />

    </Box>
  );
}
