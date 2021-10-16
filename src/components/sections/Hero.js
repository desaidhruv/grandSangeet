import {
  Box,
  Center,
  Heading,
  Button,
  VStack,
  Text,
  Icon,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar';
import bggif from '../../assets/photos/bggif.gif';
import '@fontsource/poppins';
import './Hero.css';
import { Divider } from './Divider';
import { FaArrowDown } from 'react-icons/fa';
import '../../App.css';
export default function Hero() {
  return (
    <>
      <Box
        backgroundImage={bggif}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        w="full"
        h="100vh"
        pos="relative"
      >
        <Box
          w="full"
          bg="black"
          opacity=".4"
          h="full"
          position="absolute"
        ></Box>
        <Navbar />

        <Flex
          as={Center}
          zIndex="2"
          h="80%"
          color="white"
          flexDirection="column"
        >
          <Box></Box>
          <Spacer />
          <VStack spacing="20px">
            <Text fontSize={["46px","40px","96px"]} zIndex="2" fontWeight="semibold">
              Grand Sangeet
            </Text>
            <Text
              fontFamily="Poppins"
              zIndex="2"
              textAlign="center"
              fontSize={["14px","14px","20px"]}
              w={["80%","100%"]}
              h="65px"
            >
              Blazing fast web hosting for individuals  and businesses of all
              <br /> sizes backed by 24x7x365 Support.
            </Text>
            <Button fontFamily="Poppins" fontWeight="normal" fontSize={["14px","14px","20px"]}   bg="brand.100" w={["120px","200px","200px"]} h={["40px","60px",'60px']} >
              Book now
            </Button>
          </VStack>
          <Spacer />

          <Box justifyContent="end" className="arrow bounce">
            <Icon
              as={FaArrowDown}
              className="fa fa-arrow-down fa-2x"
              fontSize="50px"
            />
          </Box>
        </Flex>
      </Box>
      <Divider />
    </>
  );
}
