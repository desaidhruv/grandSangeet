import React from 'react';
import {
  Box,
  Center,
  VStack,
  Image,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';
import banner1 from '../../assets/photos/banner1.svg';
import banner2 from '../../assets/photos/banner2.svg';
import banner3 from '../../assets/photos/banner3.svg';
import banner4 from '../../assets/photos/banner4.svg';
import arrow from '../../assets/photos/aroow.svg';
import backarrow from '../../assets/photos/back arrow.svg';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const WhyWeAre = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={30}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>
          <Box as={Center} h="500px">
            <Image src={banner1} />
          </Box>
        </Slide>

        <Slide index={1}>
          <Box as={Center} h="500px">
            <Image src={banner2} />
          </Box>
        </Slide>
        <Slide index={2}>
          <Box as={Center} h="500px">
            <Image src={banner3} />
          </Box>
        </Slide>
      </Slider>
      <ButtonBack>
        {' '}
        <Image src={backarrow} />
      </ButtonBack>
      <ButtonNext>
        {' '}
        <Image src={arrow} />
      </ButtonNext>
    </CarouselProvider>
  );
};
