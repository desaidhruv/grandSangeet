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
      <Flex as={Center} pb="30px">
        <VStack
          // w="50%"
          w="80%"
          // as={Center}
        >
          <Flex
            direction={['column', 'column', 'column', 'row']}
            h="200px"
            justify="space-evenly"
            w="full"
            // spacing="60px"
          >
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
          </Flex>
          <Flex
            justify="space-evenly"
            h="200px"
            direction={['column', 'column', 'column', 'row']}
            w="full"
            spacing="60px"
          >
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
          </Flex>
          <HStack w="full">
            <FormControl id="Message">
              <FormLabel color="brand.100">Message</FormLabel>
              <Input
                placeholder="Write your message"
                variant="flushed"
                type="name"
              />
            </FormControl>
          </HStack>
          <Flex pt="20px" pb="20px">
            <Button as={Center} size="md" bgColor="brand.100" color="white">
              Send message
            </Button>
          </Flex>
          <Box  bgColor="#FFF8F9" borderRadius="18px" p="20px" w="full" >
            <Flex flexDir="column" w="full">
              <Text
                as={Center}
                fontSize="18px"
                pt="20px"
                pb="20px"
                fontWeight="bold"
              >
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
            <Flex
              justify="center"
              h="400px"
              justify="space-evenly"
              direction={['column', 'column', 'column', 'row']}
              // justifyContent="space-between"
              // as={Center}
              // align="center"
              // w="80%"
            >
              <VStack spacing="10px">
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
          </Box>
        </VStack>

        {/* <Box w="50%"></Box> */}
      </Flex>
      <Divider />
    </Box>
  );
}
