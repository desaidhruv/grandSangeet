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
// import {
//   CarouselProvider,
//   Slider,
//   Dot,
//   Slide,
//   ButtonBack,
//   ButtonNext,
//   DotGroup,
// } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from 'react-grid-carousel';
import { Divider } from './Divider';

export const WhyWeAre = () => {
  return (
    <>
      <Text
        as={Center}
        pt="50px"
        fontSize={['20px', '20px', '38px']}
        fontWeight="bold"
      >
        Why we are?
      </Text>

      <Box position="relative">
        <Carousel scrollSnap={true} showDots={true} cols={1} rows={1} loop>
          <Carousel.Item>
            <Box position="relative" as={Center} h="500px">
              <Image src={banner1} />
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box as={Center} h="500px">
              <Image src={banner2} />
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box as={Center} h="500px">
              <Image src={banner3} />
            </Box>
          </Carousel.Item>
        </Carousel>

        {/* <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            infinite={true}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <Box position="relative" as={Center} h="500px">
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
              <Image
                pos="absolute"
                top="50%"
                // mb="auto"
                left="18%"
                src={backarrow}
              />
            </ButtonBack>
            <ButtonNext>
              <Image
                pos="absolute"
                top="50%"
                mb="auto"
                right="18%"
                src={arrow}
              />
            </ButtonNext>
            <DotGroup />
          </CarouselProvider> */}
      </Box>
      <Divider />
    </>
  );
};
