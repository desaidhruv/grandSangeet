import {
  Box,
  Center,
  VStack,
  Image,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import tt1 from '../../assets/photos/tt1.svg';
import tt2 from '../../assets/photos/tt2.svg';
import tt3 from '../../assets/photos/tt3.svg';
import tt4 from '../../assets/photos/tt4.svg';
import './slider.css';
export const Testimonial = () => {
  return (
    <VStack spacing="40px" h="600px" as={Center}>
      <Text fontSize="40px">Testimonials</Text>
      <Carousel itemsToShow={1}>
        <Box as={Center}  >
          <Image src={tt1} />
        </Box>
        <Box as={Center}  >
          <Image src={tt2} />
        </Box>
        <Box as={Center}  >
          <Image src={tt3} />
        </Box>
        <Box as={Center} >
          <Image src={tt4} />
        </Box>
        {/* <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item> */}
      </Carousel>
    </VStack>
  );
};
