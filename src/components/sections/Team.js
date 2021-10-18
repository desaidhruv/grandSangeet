import React from 'react';
import {
  VStack,
  Image,
  Button,
  Text,
  Box,
  Center,
  HStack,
  Stack,
  Flex,
} from '@chakra-ui/react';
import Rohan from '../../assets/photos/Rohan.png';
import { Divider } from './Divider';

function Team() {
  return (
    <VStack as={Center} spacing="35px" p="40px 0px 40px">
      <Text fontSize={['24px', '38px', '48px']}>Meet Our Team</Text>
      <Flex
        justify={['stretch', 'stretch', 'stretch', 'space-evenly']}
        w={['95%', '95%', '95%', '90%']}
        overflowY="hidden"
        overflowX="auto"
      >
        <VStack w={['205px', '205px', '275px']} h={['280px', '300px', '380px']}>
          <Box cursor="pointer" w="inherit" role="group" position="relative">
            <Image src={Rohan} />
            <Box
              as={Flex}
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              borderRadius="17px"
              bgColor="#FF3B63"
              visibility="hidden"
              opacity="0"
              style={{ transition: ' opacity .2s, visibility .2s' }}
              _groupHover={{ visibility: 'visible', opacity: '1' }}
            >
              <Text
                w="90%"
                fontSize={['12px', '12px', '16px']}
                color="white"
                fontFamily="Poppins"
                // _groupHover={{ translateY: '0' }}
                transition=".2s"
                style={{ transform: 'translateY(1em)' }}
                // _hover={{ transform: 'translateY(0)' }}
              >
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.Blazing fast web. Blazing fast
                web hosting for individuals and businesses of all sizes backed
                by 24x7x365 Support.Blazing fast web.
              </Text>
            </Box>
          </Box>
          <Text fontSize={['12px', '12px', '24px']}>Rohan Pharek</Text>
          <Text color="#464646" fontSize={['9px', '9px', '16px']}>
            Rohan Pharek
          </Text>
        </VStack>
        <VStack w={['205px', '205px', '275px']} h={['280px', '300px', '380px']}>
          <Box cursor="pointer" w="inherit" role="group" position="relative">
            <Image src={Rohan} />
            <Box
              as={Flex}
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              borderRadius="17px"
              bgColor="#FF3B63"
              visibility="hidden"
              opacity="0"
              style={{ transition: ' opacity .2s, visibility .2s' }}
              _groupHover={{ visibility: 'visible', opacity: '1' }}
            >
              <Text
                w="90%"
                fontSize={['12px', '12px', '16px']}
                color="white"
                fontFamily="Poppins"
                // _groupHover={{ translateY: '0' }}
                transition=".2s"
                style={{ transform: 'translateY(1em)' }}
                // _hover={{ transform: 'translateY(0)' }}
              >
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.Blazing fast web. Blazing fast
                web hosting for individuals and businesses of all sizes backed
                by 24x7x365 Support.Blazing fast web.
              </Text>
            </Box>
          </Box>
          <Text fontSize={['12px', '12px', '24px']}>Rohan Pharek</Text>
          <Text color="#464646" fontSize={['9px', '9px', '16px']}>
            Rohan Pharek
          </Text>
        </VStack>
        <VStack w={['205px', '205px', '275px']} h={['280px', '300px', '380px']}>
          <Box cursor="pointer" w="inherit" role="group" position="relative">
            <Image src={Rohan} />
            <Box
              as={Flex}
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              borderRadius="17px"
              bgColor="#FF3B63"
              visibility="hidden"
              opacity="0"
              style={{ transition: ' opacity .2s, visibility .2s' }}
              _groupHover={{ visibility: 'visible', opacity: '1' }}
            >
              <Text
                w="90%"
                fontSize={['12px', '12px', '16px']}
                color="white"
                fontFamily="Poppins"
                // _groupHover={{ translateY: '0' }}
                transition=".2s"
                style={{ transform: 'translateY(1em)' }}
                // _hover={{ transform: 'translateY(0)' }}
              >
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.Blazing fast web. Blazing fast
                web hosting for individuals and businesses of all sizes backed
                by 24x7x365 Support.Blazing fast web.
              </Text>
            </Box>
          </Box>
          <Text fontSize={['12px', '12px', '24px']}>Rohan Pharek</Text>
          <Text color="#464646" fontSize={['9px', '9px', '16px']}>
            Rohan Pharek
          </Text>
        </VStack>
        <VStack w={['205px', '205px', '275px']} h={['280px', '300px', '380px']}>
          <Box cursor="pointer" w="inherit" role="group" position="relative">
            <Image src={Rohan} />
            <Box
              as={Flex}
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              borderRadius="17px"
              bgColor="#FF3B63"
              visibility="hidden"
              opacity="0"
              style={{ transition: ' opacity .2s, visibility .2s' }}
              _groupHover={{ visibility: 'visible', opacity: '1' }}
            >
              <Text
                w="90%"
                fontSize={['12px', '12px', '16px']}
                color="white"
                fontFamily="Poppins"
                // _groupHover={{ translateY: '0' }}
                transition=".2s"
                style={{ transform: 'translateY(1em)' }}
                // _hover={{ transform: 'translateY(0)' }}
              >
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.Blazing fast web. Blazing fast
                web hosting for individuals and businesses of all sizes backed
                by 24x7x365 Support.Blazing fast web.
              </Text>
            </Box>
          </Box>
          <Text fontSize={['12px', '12px', '24px']}>Rohan Pharek</Text>
          <Text color="#464646" fontSize={['9px', '9px', '16px']}>
            Rohan Pharek
          </Text>
        </VStack>
      </Flex>
      <Divider />
    </VStack>
  );
}

export default Team;
