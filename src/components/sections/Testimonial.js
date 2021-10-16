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
// import Carousel, { consts } from 'react-elastic-carousel';
import tt1 from '../../assets/photos/tt1.svg';
import tt2 from '../../assets/photos/tt2.svg';
import tt3 from '../../assets/photos/tt3.svg';
import tt4 from '../../assets/photos/tt4.svg';
import './slider.css';
import Carousel from 'react-grid-carousel';
import { Divider } from './Divider';
import styled from 'styled-components'

export const Testimonial = () => {
  const ArrowBtn = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: ${({ type }) => (type === 'right' ? '-40px' : 'unset')};
  left: ${({ type }) => (type === 'left' ? '-40px' : 'unset')};
  width: 45px;
  height: 45px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ type }) =>
      type === 'right'
        ? 'translate(-75%, -50%) rotate(45deg)'
        : 'translate(-25%, -50%) rotate(-135deg)'};
    width: 10px;
    height: 10px;
    border-top: 2px solid #666;
    border-right: 2px solid #666;
  }
  &:hover::after {
    border-color: #333;
  }
`
  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '10px' : '12px',
        width: isActive ? '24px' : '12px',
        background: isActive ? '#FF3B63' : '#FFD2DD',
        borderRadius: '15px',
        marginTop: '30px',
      }}
    ></span>
  )
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

      <Box position="relative" p="50px 0px 50px">
        <Carousel scrollSnap={true} showDots={true} cols={1} rows={1} loop dot={MyDot} autoplay={4000}>
          <Carousel.Item>
            <Box position="relative" as={Center}>
              <Image src={tt1} />
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box as={Center}>
              <Image src={tt2} />
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box as={Center}>
              <Image src={tt3} />
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

