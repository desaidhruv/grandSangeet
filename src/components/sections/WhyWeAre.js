import { Box, Center,VStack,Image,Text,HStack,Button } from '@chakra-ui/react';
import React from 'react';
import Carousel,{ consts } from 'react-elastic-carousel'
import banner1 from "../../assets/photos/banner1.svg"
import banner2 from "../../assets/photos/banner2.svg"
import banner3 from "../../assets/photos/banner3.svg"
import banner4 from "../../assets/photos/banner4.svg"
import "./slider.css"
export const WhyWeAre = () => {
 function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '👈' : '👉'
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    )
  }


  return (
    <VStack  spacing="40px" h="600px" as={Center}>  
    <Text fontSize="40px">
      Why We Are
    </Text>
      <Carousel itemsToShow={1}>
        <Box as={Center} borderRadius="20px" w="800px" h="285px">
         
            <Image src={banner1}/>
         
        </Box>
        <Box as={Center} borderRadius="20px" w="800px" h="285px">
         
            <Image src={banner2}/>
         
        </Box>
        <Box as={Center} borderRadius="20px" w="800px" h="285px">
         
            <Image src={banner3}/>
         
        </Box>
        <Box as={Center} borderRadius="20px" w="800px" h="285px">
         
            <Image src={banner4}/>
         
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
