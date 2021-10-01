import React from 'react';
import { VStack, Image, Text, Center, HStack, Box } from '@chakra-ui/react';
import services from '../../assets/photos/services.png';
import serviceLine from '../../assets/photos/serviceline.png';
import { Divider } from './Divider';

function Services() {
  return (
    <>
      <VStack
        as={Center}
        h="780px"
        backgroundImage={serviceLine}
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      >
        <Text fontSize="36px" fontWeight="bold">
          Services We Provide
        </Text>

        {/* <Image position={'absolute'} back zIndex={'-1'} h="240px" src={serviceLine} /> */}
        <HStack pb="40px" spacing={'120px'} direction={['column', 'row']}>
          <VStack>
            <Box
              w={'180px'}
              h={'230px'}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image src={services} />
            </Box>
            <Text fontSize="30px">Wedding</Text>
            <Text fontSize="18px" color="#707070" textAlign="center">
              Blazing fast web hosting for individuals <br />
              and businesses of all sizes backed by <br />
              24x7x365 Support.Blazing fast web.
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
              <Image src={services} />
            </Box>
            <Text fontSize="30px">Wedding</Text>
            <Text fontSize="18px" color="#707070" textAlign="center">
              Blazing fast web hosting for individuals <br />
              and businesses of all sizes backed by <br />
              24x7x365 Support.Blazing fast web.
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
              <Image src={services} />
            </Box>
            <Text fontSize="30px">Wedding</Text>
            <Text fontSize="18px" color="#707070" textAlign="center">
              Blazing fast web hosting for individuals <br />
              and businesses of all sizes backed by <br />
              24x7x365 Support.Blazing fast web.
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <Divider />
    </>
  );
}

export default Services;
