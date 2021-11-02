import React from 'react';
import {
  Box,
  Center,
  Image,
  Text,
} from '@chakra-ui/react';
import banner1 from '../../assets/photos/Service1.png';
import banner2 from '../../assets/photos/Service2.png';
import banner3 from '../../assets/photos/Service3.png';
import banner4 from '../../assets/photos/Service4.png';
import './whyweare.css'
import Carousel from 'react-grid-carousel';
import { Divider } from './Divider';

export const WhyWeAre = () => {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        marginTop: '30px',
        height: isActive ? '10px' : '12px',
        width: isActive ? '24px' : '12px',
        background: isActive ? '#FF3B63' : '#FFD2DD',
        borderRadius: '15px',
      }}
    ></span>
  )
  return (
    <>
      <Text
        as={Center}
        pt="50px"
        fontSize={['20px', '20px', '38px']}
        className="fontClass"
      >
        What you get?
      </Text>

      <Box position="relative" p="50px 0px 50px">
        <Carousel scrollSnap={true} showDots={true} cols={1} rows={1} loop dot={MyDot} autoplay={4000}>
          <Carousel.Item>
            <Box position="relative" as={Center}>
              <Image src={banner1} />
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box as={Center}>
              <Image src={banner2} />
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box as={Center}>
              <Image src={banner3} />
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box as={Center}>
              <Image src={banner4} />
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
