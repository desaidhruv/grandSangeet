import React from 'react';
import {
  Flex,
  VStack,
  Image,
  Text,
  Center,
  HStack,
  Box,
} from '@chakra-ui/react';
import choreographer from '../../assets/photos/choreographer.png';
import anchor from '../../assets/photos/anchor.png';
import dancer from '../../assets/photos/Dancer.png';
import services from '../../assets/photos/services.png';
import serviceLine from '../../assets/photos/serviceline.png';
import { Divider } from './Divider';

function Services() {
  return (
    <>
      <VStack
        as={Center}
        // h="780px"
        // backgroundImage={serviceLine}
        // backgroundPosition="center"
        // backgroundSize="contain"
        // backgroundRepeat="no-repeat"
      >
        <Text

          p="20px"
          fontSize={['20px', '20px', '36px']}
          className="fontClass"
        >
          Additional Services
        </Text>

        {/* <Image position={'absolute'} back zIndex={'-1'} h="240px" src={serviceLine} /> */}
        <Flex
          w="full"
          justify="space-evenly"
          fontFamily="Poppins"
          pb="40px"
          spacing={'120px'}
          direction={['column','column' ,'column','row']}
        >
          <VStack>
            <Box
              w={'180px'}
              h={'230px'}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image src={dancer} />
            </Box>
            <Text fontSize={['20px', '20px', '30px']}>Background Dancer</Text>
            <Text
              fontSize={['12px', '12px', '18px']}
              color="#707070"
              textAlign="center"
            >
              {/* If you're someone who's looking at their <br />
              wedding as nothing short of the award <br />
              show, we suggest you hire our <br />
              professional background troupe of performers */}
              Are you someone who dreams of their sangeet to  <br />
              be nothing less than an award show? Our <br />
              background troupe of performers are trained <br />
              to make you appear like a star and that will <br />
              definitely leave your padosis and ristedars <br />
              Star-struck!
            </Text>
          </VStack>
          
          <VStack>
            <Box
              w={'180px'}
              h={'230px'}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image src={anchor} />
            </Box>
            <Text fontSize={['20px', '20px', '30px']}>Anchor</Text>
            <Text
              fontSize={['12px', '12px', '18px']}
              color="#707070"
              textAlign="center"
            >
              We provide wedding Anchor who will not <br />
              let you miss out on the entertainment <br />
              on your sangeet night because that's <br />
              your day to  rock-and-roll.
            </Text>
          </VStack>
          <VStack>
            <Box
              w={'180px'}
              h={'230px'}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image src={choreographer} />
            </Box>
            <Text fontSize={['20px', '20px', '30px']}>Visuals and props</Text>
            <Text
              fontSize={['12px', '12px', '18px']}
              color="#707070"
              textAlign="center"
            >
              We know you're bored by the traditional <br />
              background visuals that's why we <br />
              suggest you to customise your dance <br />
              performance with our visuals and props <br />
              to make your performance look special <br />
              and extraordinary.
              {/* We provide wedding choreographers <br />
              who know how to glam up your sangeet <br />
              night and if you're looking for a lot of <br />
              masti, then you're at the right place. */}
            </Text>
          </VStack>
        </Flex>
      </VStack>
      <Divider />
    </>
  );
}

export default Services;
