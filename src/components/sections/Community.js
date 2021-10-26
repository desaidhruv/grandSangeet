import React from 'react';
import {
  VStack,
  Image,
  Button,
  Text,
  Center,
  Flex,
  FormControl,
  FormLabel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Box,
  Icon,
} from '@chakra-ui/react';
import globalScope from '../../assets/photos/global scope.png';
import mentoring from '../../assets/photos/mentoring.png';
import businessGrowth from '../../assets/photos/business growth.png';
import salesTeam from '../../assets/photos/sales team.png';
import ImageModal from '../../assets/photos/Modal.svg';
import { Divider } from './Divider';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Community() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack as={Center} spacing={['5px', '10px', '40px', '45px']}>
        <Text fontSize={['24px', '24px', '32px', '36px']} className="fontClass">
          Join our community!
        </Text>
        <Text fontSize={['20px', '20px', '32px', '33px']} fontWeight="bold">
          Why to join us?
        </Text>
        <Flex
          p="40px 0px"
          justify={['stretch', 'stretch', 'stretch', 'space-evenly']}
          w={['75%', '80%', '80%', '95%']}
          h="full"

          overflowY="hidden"
          overflowX="auto"
        >
          <VStack

            boxShadow="5px 5px 11px 0px #0000001A"
            w={['121px', '121px', '121px', '290px']}
            h={['298px', '298px', '298px', '477px']}
            rounded={'17px'}
            bg={'white'}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={['10px', '15px', '18px', '25px']}
            >
              <Box as={Center}>
                <Image w={['73px', '73px', '73px', 'full']} src={globalScope} />
              </Box>
              <Text
                fontSize={['12px', '12px', '12px', '24px']}
                textAlign="center"
              >
                Global Scope
              </Text>
              <Text
                w="95%"
                fontSize={['10px', '10px', '10px', '18px']}
                color="#707070"
                textAlign="center"
              >
                Working with grand sangeet will not only get you to experience an exciting challenges but you also get a global exposure of making people move and groove on the dance floor.
                {/* Blazing fast web hosting for <br />
                individuals and businesses of all <br />
                sizes backed by 24x7x365 <br />
                Support.Blazing fast web. */}
              </Text>
            </VStack>
          </VStack>
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={['121px', '121px', '121px', '290px']}
            h={['298px', '298px', '298px', '477px']}
            rounded={'17px'}
            bg={'white'}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={['10px', '15px', '18px', '25px']}
            >
              <Box as={Center}>
                <Image w={['73px', '73px', '73px', 'full']} src={mentoring} />
              </Box>
              <Text
                fontSize={['12px', '12px', '12px', '24px']}
                textAlign="center"
              >
                Mentoring
              </Text>
              <Text
                w="95%"
                fontSize={['10px', '10px', '10px', '18px']}
                color="#707070"
                textAlign="center"
              >
                You will get mentored by industry experts which will eventually enhance your expertise and
                will lead you to the path of become a successful wedding choreographer.
                {/* Blazing fast web hosting for <br />
                individuals and businesses of all <br />
                sizes backed by 24x7x365 <br />
                Support.Blazing fast web. */}
              </Text>
            </VStack>
          </VStack>
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={['121px', '121px', '121px', '290px']}
            h={['298px', '298px', '298px', '477px']}
            rounded={'17px'}
            bg={'white'}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={['10px', '15px', '18px', '25px']}
            >
              <Box as={Center}>
                <Image w={['73px', '73px', '73px', 'full']} src={businessGrowth} />
              </Box>
              <Text
                fontSize={['12px', '12px', '12px', '24px']}
                textAlign="center"
              >
                Business Growth
              </Text>
              <Text
                w="95%"
                fontSize={['10px', '10px', '10px', '18px']}
                color="#707070"
                textAlign="center"
              >
                Working with us gives you an  opportunity of getting a lot of clients and an increase in revenue. Because you become a part of a highly motivated team.
                {/* Blazing fast web hosting for <br />
                individuals and businesses of all <br />
                sizes backed by 24x7x365 <br />
                Support.Blazing fast web. */}
              </Text>
            </VStack>
          </VStack>
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={['121px', '121px', '121px', '290px']}
            h={['298px', '298px', '298px', '477px']}
            rounded={'17px'}
            bg={'white'}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={['10px', '15px', '18px', '25px']}
            >
              <Box as={Center}>
                <Image w={['73px', '73px', '73px', 'full']} src={salesTeam} />
              </Box>
              <Text
                fontSize={['12px', '12px', '12px', '24px']}
                textAlign="center"
              >
                Sales Team
              </Text>
              <Text
                w="95%"
                fontSize={['10px', '10px', '10px', '18px']}
                color="#707070"
                textAlign="center"
              >
                Grand sangeet offers you a personalized sales team who are highly trained in bringing the best deal on the table by understanding the clients need.
                {/* Blazing fast web hosting for <br />
                individuals and businesses of all <br />
                sizes backed by 24x7x365 <br />
                Support.Blazing fast web. */}
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </VStack>
      <Modal size="5xl" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent fontFamily="Poppins" borderRadius="20px" bg="#FFECF1">
          <Icon
            fontSize="40px"
            color="#F178B6"
            pos="absolute"
            right="10px"
            top="10px"
            onClick={onClose}
            cursor="pointer"
            as={AiOutlineCloseCircle}
          />

          <Text p="20px" as={Center} fontSize="40px">
            Join our community!
          </Text>
          <Flex pt="50px" justify="center" w="full" direction="row">
            <Flex direction="row" w="60%" as={Center} justify="space-evenly">
              <FormControl w="40%" id="name" pr="20px">
                <FormLabel color="brand.100">Full Name</FormLabel>
                <Input placeholder="Name" variant="flushed" type="name" />
              </FormControl>
              <FormControl w="40%" id="email">
                <FormLabel color="brand.100">Email</FormLabel>
                <Input
                  placeholder="Email"
                  variant="flushed"
                  type="email"
                />
              </FormControl>
            </Flex>
          </Flex>
          <Flex pt="50px" justify="center" w="full" direction="row">
            <Flex direction="row" w="60%" as={Center} justify="space-evenly">
              <FormControl w="40%" id="name" pr="20px">
                <FormLabel color="brand.100">Phone Number</FormLabel>
                <Input placeholder="Number" variant="flushed" type="name" />
              </FormControl>
              <FormControl w="40%" id="email">
                <FormLabel color="brand.100">Social Media Link</FormLabel>
                <Input
                  placeholder="URL"
                  variant="flushed"
                  type="email"
                />
              </FormControl>
            </Flex>
          </Flex>
          <Box p="50px" as={Center}>
            <Button bg="#FF3B63" size="l">
              Join us
            </Button>
          </Box>
          <Box
            overflow="hidden"
            pos="absolute"
            right="0"
            bottom="0"
            w="350px"
            h="350px"
          >
            <Image pt="200px" w="100%" h="100%" src={ImageModal} />
          </Box>
        </ModalContent>
      </Modal>
      <VStack height="300px" w="full" spacing="30px" as={Center}>
        <Text textAlign="center" fontSize={['20px', '22px', '32px', '36px']}>
          Join our community <br /> to help you grow as choreographers.
        </Text>
        <HStack spacing="30px">
          <Button onClick={onOpen} color="white" bgColor="brand.100" size="lg">
            Join us
          </Button>
          <Button variant="outline" size="lg" color="brand.100">
            {' '}
            Learn more
          </Button>
        </HStack>
      </VStack>
      <Divider />
    </>
  );
}

export default Community;
