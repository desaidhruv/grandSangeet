import React from 'react';
import { VStack, Image, Text, Center, Flex, Box } from '@chakra-ui/react';
import origin from '../../assets/photos/origin.png';
import mission from '../../assets/photos/mission.png';
import vision from '../../assets/photos/Vision.png';
import { Divider } from './Divider';

function About() {
  return (
    <>
      <VStack pt="80px" pb="40px" as={Center} id="about">
        <Text
          fontFamily="Poppins"
          fontSize={['36px', '36px', '48px']}
          fontWeight="bold"
        />
        <Text fontSize={['26px', '26px', '48px']} fontWeight="medium">
          About Us
        </Text>
        <Flex pt="20px" direction={['column', 'row']} as={Center}>
          <svg
            width="44"
            height="41"
            viewBox="0 0 44 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.9597 7.03419C35.2986 5.39043 33.0914 4.48975 30.7476 4.48975C28.4038 4.48975 26.1966 5.39043 24.5355 7.03419L22.7606 8.79053L24.4444 10.4568L26.2193 8.70047C27.4254 7.50705 29.041 6.83154 30.7476 6.83154C32.4542 6.83154 34.0698 7.48454 35.2758 8.70047C36.4819 9.89388 37.1645 11.4926 37.1645 13.1814C37.1645 14.8702 36.5046 16.4689 35.2758 17.6623L32.75 20.1617L19.4839 7.03419C17.8227 5.39043 15.6155 4.48975 13.2717 4.48975C10.928 4.48975 8.72072 5.39043 7.0596 7.03419C5.39848 8.67795 4.48828 10.8621 4.48828 13.1814C4.48828 15.4331 5.35297 17.5497 6.92307 19.1935L8.60694 17.5272C7.49195 16.3338 6.87756 14.8026 6.87756 13.1814C6.87756 11.4926 7.53746 9.89388 8.74347 8.70047C9.94949 7.50705 11.5651 6.83154 13.2717 6.83154C14.9101 6.83154 16.4802 7.4395 17.6634 8.54284C17.709 8.58788 18.4371 9.30843 18.4371 9.30843L7.69674 19.9591L22.0097 34.1224L29.7919 26.4215L22.7378 19.4412L21.0539 21.1075L26.4241 26.4215L22.0097 30.7899L11.0417 19.9591L20.121 10.9747L32.75 23.4718L36.937 19.3286C38.5981 17.6848 39.5083 15.5007 39.5083 13.1814C39.531 10.8621 38.5981 8.67795 36.9597 7.03419Z"
              fill="#FF3B63"
            />
            <path
              d="M22 40.8571L3.91411 22.7982C1.39468 20.2826 0 16.9134 0 13.3645C0 9.79314 1.39468 6.4464 3.91411 3.93073C6.43354 1.3926 9.78528 0 13.362 0C16.5562 0 19.5706 1.1006 22 3.14459C24.407 1.1006 27.4438 0 30.638 0C34.2147 0 37.5665 1.3926 40.0859 3.90827C42.6053 6.42394 44 9.79314 44 13.342C44 16.9134 42.6053 20.2601 40.0859 22.7758L22 40.8571ZM13.362 2.33598C10.4151 2.33598 7.64826 3.4815 5.55624 5.57041C3.46421 7.65931 2.33947 10.4221 2.33947 13.3645C2.33947 16.3069 3.48671 19.0697 5.57873 21.1586L22 37.5553L38.4213 21.1586C40.5133 19.0697 41.6605 16.3069 41.6605 13.3645C41.6605 10.4221 40.5133 7.65931 38.4213 5.57041C36.3292 3.4815 33.5624 2.33598 30.6155 2.33598C27.6687 2.33598 24.9018 3.4815 22.8098 5.57041L21.9775 6.40148L21.1452 5.57041C19.0757 3.4815 16.3088 2.33598 13.362 2.33598Z"
              fill="#FFD2DD"
            />
          </svg>

          <Text
            pl="20px"
            fontSize={['24px', '24px', '36px']}
            color="#FF3B63"
            className="fontClass"
          >
            Grand Sangeet
          </Text>
        </Flex>

        <Flex
          fontFamily="Poppins"
          pt="20px"
          justify="space-evenly"
          w="full"
          h={['1200px', '1200px', 'full', 'full']}
          direction={['column', 'column', 'column', 'row']}
        >
          <VStack>
            <Box
              w={['165px', '165px', '180px']}
              h={['160px', '160px', '230px']}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image p="10px" src={origin} />
            </Box>
            <Text fontSize="30px">Origin</Text>
            <Text
              w="300px"
              fontSize={['12px', '12px', '18px']}
              color="#707070"
              textAlign="center"
            >
              Grand sangeet originated from the idea of building a community for
              the best wedding choreographers with a common mission of
              delivering the bestest sangeet experience like never before.
            </Text>
          </VStack>
          <VStack>
            <Box
              w={['165px', '165px', '180px']}
              h={['160px', '160px', '230px']}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image p="10px" src={mission} />
            </Box>
            <Text fontSize="30px">Mission</Text>
            <Text
              w="300px"
              fontSize={['12px', '12px', '18px']}
              color="#707070"
              textAlign="center"
            >
              Grand Sangeet's mission Is to Provide best service to the clients
              an to empower millions of wedding Choreographers worldwide.
            </Text>
          </VStack>
          <VStack>
            <Box
              w={['165px', '165px', '180px']}
              h={['160px', '160px', '230px']}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image p="10px" src={vision} />
            </Box>
            <Text fontSize="30px">Vision</Text>
            <Text
              w="300px"
              fontSize={['12px', '12px', '18px']}
              color="#707070"
              textAlign="center"
            >
              Our vision is to bring quality, standardization and transparency
              in the wedding choreography industry to create a positive and
              exciting sangeet environment for all the families across the
              globe.
            </Text>
          </VStack>
        </Flex>
      </VStack>
      <Divider />
    </>
  );
}

export default About;
