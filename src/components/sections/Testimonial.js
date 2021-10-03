import {
  Box,
  Circle,
  Flex,
  HStack,
  Text,
  Center,
  Image,
  Img,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import testi from '../../assets/photos/testimonial.png'


export const Testimonial = () => (
  <Box as="section">
    <Box
      maxW="3xl"
      mx="auto"
      px={{
        base: '6',
        md: '8',
      }}
      pt="12"
      pb="16"
    >
      <Flex direction="column" align="center" textAlign="center">
        <Text as={Center}>
          Blazing fast web hosting for individuals and businesses of all sizes
          backed by 24x7x365 Support.Blazing fast web. Blazing fast web hosting
          for individuals and businesses of all sizes backed by 24x7x365
          Support.Blazing fast web.
        </Text>
        <Text
          fontSize={{
            base: 'xl',
            md: '2xl',
          }}
          fontWeight="medium"
          mt="6"
        >
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
          laborum sed rerum et corporis.&rdquo;
        </Text>
        <Box>
          <Img
            src={testi}
            mx="auto"
            objectFit="cover"
            w="16"
            h="16"
            rounded="full"
          />
          <Box mt="3">
            <Text as="cite" fontStyle="normal" fontWeight="bold">
              {/* {name} */}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {/* {jobTitle} */}
            </Text>
          </Box>
        </Box>
      </Flex>
      <HStack
        justify="center"
        spacing="4"
        mt="8"
        // color={useColorModeValue('gray.300', 'gray.600')}
      >
        <Circle w="3" h="3" bg="blue.500" />
        <Circle w="2" h="2" bg="currentColor" />
        <Circle w="2" h="2" bg="currentColor" />
      </HStack>
    </Box>
  </Box>
);
