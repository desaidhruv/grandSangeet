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
        <Text fontSize={['26px', '26px', '48px']} pb="40px" className="fontClass">
          How Grand Sangeet work?
        </Text>
        <Flex
          pb="120px"
          fontFamily="Poppins"
          justify="space-evenly"
          w="full"
          h={['full', 'full', 'full', 'full']}
          direction={['column', 'column', 'column', 'row']}
        >
          <VStack>
            <Box rounded={'17px'} bg={'white'} as={Center}>
              <Image
                w={['165px', '165px', '180px']}
                h={['160px', '160px', '230px']}
                src={Application}
              />
            </Box>
            <Text fontSize="30px">Application</Text>
            <Text w="300px" fontSize="18px" color="#707070" textAlign="center">
              We hand pick the best choreographers across India through their
              video samples and work experience.
            </Text>
          </VStack>
          <VStack as={Center} pb={['60px', '60px', '190px', '190px']}>
            <Image
              mt={['60px', '0px', '0px']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)']}
              src={arrow}
            />
          </VStack>
          <VStack>
            <Box rounded={'17px'} bg={'white'} as={Center}>
              <Image
                w={['165px', '165px', '180px']}
                h={['160px', '160px', '230px']}
                src={Audtion}
              />
            </Box>
            <Text fontSize="30px">Audition</Text>
            <Text w="300px" fontSize="18px" color="#707070" textAlign="center">
              Then we conduct an audition for the choreographers and shortlist
              them based on their choreography styles and techniques.
            </Text>
          </VStack>
          <VStack as={Center} pb={['60px', '60px', '190px', '190px']}>
            <Image
              mt={['60px', '0px', '0px']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)']}
              src={arrow}
            />
          </VStack>
          <VStack>
            <Box rounded={'17px'} bg={'white'} as={Center}>
              <Image
                w={['165px', '165px', '180px']}
                h={['160px', '160px', '230px']}
                src={Training}
              />
            </Box>
            <Text fontSize="30px">Training & Evaluation</Text>
            <Text w="300px" fontSize="18px" color="#707070" textAlign="center">
              Shortlisted choreographers will be provided training which will
              boost their skills and enhance them as a choreographer.
            </Text>
          </VStack>
          <VStack as={Center} pb={['60px', '60px', '190px', '190px']}>
            <Image
              mt={['60px', '0px', '0px']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)']}
              src={arrow}
            />
          </VStack>
          <VStack>
            <Box>
              <Image
                w={['165px', '165px', '180px']}
                h={['160px', '160px', '230px']}
                src={onBoard}
              />
            </Box>
            <Text fontSize="30px">Onboarding/Listing</Text>
            <Text w="300px" fontSize="18px" color="#707070" textAlign="center">
              The best among them will get listed on our website to provide you
              the bestest sangeet experience.
            </Text>
          </VStack>
        </Flex>
      </VStack>
      <Divider />
    </>
  );
}

export default Work;
