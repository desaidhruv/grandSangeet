import {
  Flex,
  FormControl,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Button,
  Image,
  HStack,
  Center,
  VStack,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Divider } from './Divider';
import mailIcon from '../../assets/photos/mailIcon.svg';
import location from '../../assets/photos/location.svg';
import phone from '../../assets/photos/phone.svg';

export default function Contact() {
  return (
    <Box w="full">
      <Text fontSize="48px" h="150px" as={Center} fontWeight="medium">
        Contact us
      </Text>
      <Flex  pb="30px" w="full" >
        <VStack
 
          w="50%"
          // as={Center}
          spacing="60px"
        >
          <HStack w="80%" spacing="60px">
            <FormControl id="name">
              <FormLabel color="brand.100">Full Name</FormLabel>
              <Input placeholder="Name" variant="flushed" type="name" />
            </FormControl>
            <FormControl id="email">
              <FormLabel color="brand.100">Email</FormLabel>
              <Input
                placeholder="Email Address"
                variant="flushed"
                type="email"
              />
            </FormControl>
          </HStack>
          <HStack w="80%"  spacing="60px">
            <FormControl id="phone">
              <FormLabel color="brand.100">Phone Number</FormLabel>
              <Input
                placeholder="Phone Number"
                variant="flushed"
                type="number"
              />
            </FormControl>
            <FormControl id="date">
              <FormLabel color="brand.100">Event date</FormLabel>
              <Input placeholder="DD/MM/YY" variant="flushed" type="date" />
            </FormControl>
          </HStack>
          <HStack w="80%">
            <FormControl id="Message">
              <FormLabel color="brand.100">Message</FormLabel>
              <Input
                placeholder="Write your message"
                variant="flushed"
                type="name"
              />
            </FormControl>
          </HStack>
          <Flex pl="300px" alignItems="flex-end">
            <Button size="lg" bgColor="brand.100" color="white">
              Send message
            </Button>
          </Flex>
          <Flex flexDir="column" w="80%">
            <Text fontSize="14px" fontWeight="bold">
              Subscribe to our newsletter
            </Text>
            <InputGroup>
              <Input placeholder="Enter email address" />
              <InputRightElement w="100px">
                <Button color="white" bgColor="brand.100">
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex justifyContent="space-between" as={Center} align="center" w="80%" >
            <VStack pr='20px' spacing="10px">
              <Image src={mailIcon} />
              <Text>Grandsangeet@support.com</Text>
            </VStack>
            <VStack spacing="10px">
              <Image src={location} />
              <Text>345 Hill Ave. Nashville, TN 37210, Mumbai: 784945</Text>
            </VStack>
            <VStack spacing="10px">
              <Image src={phone} />
              <Text>+91 895 8546 985 ,+91 547 5846 934</Text>
            </VStack>
          </Flex>

    
        </VStack>

        <Box w="50%"></Box>
      </Flex>
      <Divider />
    </Box>
  );
}
