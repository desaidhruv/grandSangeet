import React from 'react';
import {
  VStack,
  Image,
  Button,
  Text,
  Center,
  Flex,
  HStack,
  Box,
} from '@chakra-ui/react';
import Application from '../../assets/photos/Application.svg';
import Audtion from '../../assets/photos/Audtion.svg';
import Training from '../../assets/photos/Training.svg';
import onBoard from '../../assets/photos/onBoard.svg';
import arrow from '../../assets/photos/aroow.svg';
import { Divider } from './Divider';

function Work() {
  return (
    <>
      <VStack pt="80px" as={Center}>
        <Text fontSize={['26px', '26px', '48px']} pb="40px" fontWeight="medium">
          How Grand Sangeet work?
        </Text>
        <Flex
          pb="120px"
          fontFamily="Poppins"
          justify="space-evenly"
          w="full"
          h={['2000px', '2000px', 'full', 'full']}
          direction={['column', 'column', 'column', 'row']}
        >
          <VStack>
            <Box
              //   boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image
                w={['165px', '165px', '180px']}
                h={['160px', '160px', '230px']}
                src={Application}
              />
            </Box>
            <Text fontSize="30px">Origin</Text>
            <Text w="300px" fontSize="18px" color="#707070" textAlign="center">
              We find the best hand-picked choreographers across pan India
              through their sample and work applications sent to us.
            </Text>
          </VStack>
          <VStack as={Center} pb="20px">
            <Image
              mt={['60px', '0px', '0px']}
              // className="arrow-rotate"
              transform={['rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)']}
              src={arrow}
            />
          </VStack>
          <VStack>
            <Box
              //   w={['165px', '165px', '180px']}
              //   h={['160px', '160px', '230px']}
              //   boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image
                w={['165px', '165px', '180px']}
                h={['160px', '160px', '230px']}
                src={Audtion}
              />
            </Box>
            <Text fontSize="30px">Mission</Text>
            <Text w="300px" fontSize="18px" color="#707070" textAlign="center">
              Choreographers' auditions would be shortlisted based on their
              wedding choreography skills like techniques, and experience, etc.
            </Text>
          </VStack>
          <VStack as={Center} pb="20px">
            <Image
              mt={['60px', '0px', '0px']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)']}
              src={arrow}
            />
          </VStack>
          <VStack>
            <Box
              //   w={['165px', '165px', '180px']}
              //   h={['160px', '160px', '230px']}
              //   boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image
                w={['165px', '165px', '180px']}
                h={['160px', '160px', '230px']}
                src={Training}
              />
            </Box>
            <Text fontSize="30px">Vision</Text>
            <Text w="300px" fontSize="18px" color="#707070" textAlign="center">
              Choreographers will get a higher level of training on the skills
              they might need to improve and make them keen on it.
            </Text>
          </VStack>
          <VStack as={Center} pb="40px">
            <Image  
              mt={['60px', '0px', '0px']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)']}
              src={arrow} />
          </VStack>
          <VStack>
            <Box
            //   w={['165px', '165px', '180px']}
            //   h={['160px', '160px', '230px']}
            //   boxShadow="5px 5px 11px 0px #0000001A"
            //   rounded={'17px'}
            >
              <Image
                w={['165px', '165px', '180px']}
                h={['160px', '160px', '230px']}
                src={onBoard}
              />
            </Box>
            <Text fontSize="30px">Vision</Text>
            <Text w="300px" fontSize="18px" color="#707070" textAlign="center">
              Our best choreographers with keen skills will be list on board on
              our website to find the best according to their needs.
            </Text>
          </VStack>
        </Flex>
      </VStack>
      <Divider />
    </>
  );
}

export default Work;
