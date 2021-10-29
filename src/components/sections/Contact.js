import React from 'react';
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
import { Divider } from './Divider';
import mailIcon from '../../assets/photos/mailIcon.svg';
import location from '../../assets/photos/location.svg';
import phone from '../../assets/photos/phone.svg';
import contact from '../../assets/photos/contact.png';

export default function Contact() {
  return (
    <Box fontFamily="Poppins" w="full" id="contact">
      <Text fontSize="48px" h="150px" as={Center} fontWeight="medium">
        Contact us
      </Text>
      <Flex
        justifyContent="space-evenly"
        direction="row"
        alignItems="center"
        w="inherit"
        as={Center}
        pb="30px"
      >
        <VStack
          w={["80%","80%","50%"]}
          as={Center}
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
            <Button _hover={{ bg: '#FBB1C3', color: '#FF3B63' }} size="md" bgColor="brand.100" color="white">
              Send message
            </Button>
          </Flex>
          <Box bgColor="#FFF8F9" borderRadius="18px" p="20px" w="full">
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
                  <Button  _hover={{ bg: '#FBB1C3', color: '#FF3B63' }} color="white" bgColor="brand.100">
                    Subscribe
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex
              justify="center"
              // h="400px"
              pt="50px"
              w="inherit"
              // border="2px solid red"
              justify="space-evenly"
              direction={['column', 'column', 'column', 'row']}
              // justifyContent="space-between"
              // as={Center}
              // align="center"
              // w="80%"
              fontSize="13px"
              as={Center}
            >
              <VStack w={["80%","30%"]}  spacing="10px">
                <Image src={mailIcon} />
                <Text textAlign="center">Support@grandsangeet.com</Text>
              </VStack>
              <VStack  w={["80%","30%"]} spacing="10px">
                <Image src={location} />
                <Text textAlign="center">
                  Prabhat lane, duttatota, puri, odisha, 752001
                </Text>
              </VStack>
              <VStack w={["80%","30%"]} spacing="10px">
                <Image src={phone} />
                <Text textAlign="center">+91 7327819258, +91 8328856530</Text>
              </VStack>
            </Flex>
          </Box>
        </VStack>

        <Box display={['none', 'none', 'flex', 'flex']}>
          <Image src={contact} />
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
}