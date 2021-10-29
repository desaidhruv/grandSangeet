import React from 'react';
import {
  Box,
  Flex,
  Image,
  VStack,
  Center,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  HStack,
  useDisclosure,
  Icon,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import logo from '../assets/photos/logo.svg';
import close from '../assets/photos/close.svg';
import mhome from '../assets/photos/mhome.svg';
import mgallery from '../assets/photos/mgallery.svg';
import maboutus from '../assets/photos/maboutus.svg';
import mcontactus from '../assets/photos/mcontactus.svg';
import mjoinus from '../assets/photos/mjoinus.svg';
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex pt="20px" pb="20px" pl="40px" justify="space-between" pr="40px">
      <Box zIndex="1" as={Center}>
        <Image h={["64px","64px","84px"]} w={["58px","58px","78px"]}  src={logo} />
      </Box>

      <Spacer />
      <Center>
        <Icon
          // ref={btnRef}
          as={Button}
          onClick={onOpen}
          cursor="pointer"
          zIndex="4"
          left="30px"
          fontSize="30px"
          color="white"
          as={MdMenu}
          display={['flex', 'flex', 'none', 'none']}
        />
      </Center>
      <Drawer
        w="200px"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          w="60% !important"
          borderLeftRadius="40px"
          h="fit-content"
        >
          {/* <DrawerBody border="2px solid red" > */}
            {' '}
            <VStack w="full" align="center">
              <Box  as={Center} h="105px">
                <Image w="40px" h="40px" onClick={onClose} src={close} />
              </Box>
              <Box as={Center} h="105px">
                <Image w="80px" h="80px"src={mhome} />
              </Box>
              <Box as={Center} h="105px">
                <Image w="60px" h="60px" src={mgallery} />
              </Box>
              <Box as={Center} h="105px">
                <Image w="80px" h="80px" src={maboutus} />
              </Box>
              <Box as={Center} h="105px">
                <Image w="80px" h="80px" src={mcontactus} />
              </Box>
              <Box  borderBottomLeftRadius="40px" bg="#FF3B63" w="full" as={Center} h="105px">
                <Image w="80px" h="80px" src={mjoinus} />
              </Box>
            </VStack>
          {/* </DrawerBody> */}
        </DrawerContent>
      </Drawer>
      <HStack
        display={['none', 'none', 'flex', 'flex']}
        color="white"
        spacing="20px"
      >
        <Button  variant="outline" >Home</Button>
        <Button as={Link} colorScheme="white" href="#about">About us</Button>
        <Button as={Link} colorScheme="white" href="#gallery">Gallery</Button>
        <Button as={Link} colorScheme="white" href="#contact">Contact</Button>
      </HStack>
    </Flex>
  );
}
