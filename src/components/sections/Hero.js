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
  Image
} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar';
import bggif from '../../assets/photos/bggif.gif';
import heroArrow from '../../assets/photos/hero arrow.png';
import bgmob from '../../assets/photos/bgmob.gif';
import '@fontsource/poppins';
import './Hero.css';
import { Divider } from './Divider';
import '../../App.css';
export default function Hero() {
  return (
    <>
      <Box
        backgroundImage={[bgmob,bggif,bggif,bggif]}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        w="full"
        h="100vh"
        pos="relative"
      >
        {/* <video>    */}

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
            <Text fontSize={["46px","40px","96px"]} zIndex="2" className="fontClass">
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
              India's favourite wedding choreogaphy brand.
            </Text>
            <Button fontFamily="Poppins" fontWeight="normal" fontSize={["14px","14px","20px"]}   bg="brand.100" w={["120px","200px","200px"]} h={["40px","60px",'60px']} _hover={{ bg: "#FBB1C3", color: "#FF3B63" }}>
              Book now
            </Button>
          </VStack>
          <Spacer />

          <Box justifyContent="end" className="arrow bounce">
            <Image src = {heroArrow}/>
          </Box>
        </Flex>
      </Box>
      <Divider />
    </>
  );
}
