import React from 'react';
import {
  VStack,
  Image,
  Button,
  Text,
  Center,
  HStack,
  Box,
} from '@chakra-ui/react';
import origin from '../../assets/photos/origin.png';
import mission from '../../assets/photos/mission.png';
import vision from '../../assets/photos/Vision.png';
import { Divider } from './Divider';

function About() {
  return (
    <>
    
    <VStack as={Center} h="800px">
      <Text fontSize="48px" fontWeight="medium">
        About Us
      </Text>
      <HStack>
        <svg
          width="44"
          height="40"
          viewBox="0 0 84 78"
          fill="#FF3B63"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.5612 13.4291C67.39 10.291 63.1762 8.57153 58.7017 8.57153C54.2273 8.57153 50.0134 10.291 46.8422 13.4291L43.4538 16.7821L46.6685 19.9632L50.0569 16.6102C52.3593 14.3318 55.4436 13.0422 58.7017 13.0422C61.9598 13.0422 65.0442 14.2889 67.3466 16.6102C69.649 18.8885 70.9522 21.9406 70.9522 25.1647C70.9522 28.3887 69.6924 31.4408 67.3466 33.7192L62.5246 38.4908L37.1982 13.4291C34.027 10.291 29.8132 8.57153 25.3387 8.57153C20.8642 8.57153 16.6504 10.291 13.4792 13.4291C10.308 16.5672 8.57031 20.737 8.57031 25.1647C8.57031 29.4634 10.2211 33.5042 13.2185 36.6423L16.4332 33.4612C14.3046 31.1829 13.1317 28.2598 13.1317 25.1647C13.1317 21.9406 14.3915 18.8885 16.6939 16.6102C18.9963 14.3318 22.0806 13.0422 25.3387 13.0422C28.4665 13.0422 31.4639 14.2029 33.7229 16.3093C33.8098 16.3952 35.1999 17.7708 35.1999 17.7708L14.6956 38.1039L42.0202 65.143L56.8772 50.4413L43.4103 37.1152L40.1957 40.2962L50.4479 50.4413L42.0202 58.7808L21.0814 38.1039L38.4146 20.9519L62.5246 44.8099L70.5178 36.9002C73.689 33.7622 75.4267 29.5924 75.4267 25.1647C75.4701 20.737 73.689 16.5672 70.5612 13.4291Z"
            fill="#FF3B63"
          />
          <path
            d="M42 78L7.47239 43.5239C2.66257 38.7213 0 32.2892 0 25.514C0 18.696 2.66257 12.3068 7.47239 7.50412C12.2822 2.6586 18.681 0 25.5092 0C31.6074 0 37.362 2.10115 42 6.0033C46.5951 2.10115 52.3926 0 58.4908 0C65.319 0 71.7178 2.6586 76.5276 7.46124C81.3374 12.2639 84 18.696 84 25.4711C84 32.2892 81.3374 38.6784 76.5276 43.481L42 78ZM25.5092 4.45959C19.8834 4.45959 14.6012 6.64651 10.6074 10.6344C6.6135 14.6223 4.46626 19.8966 4.46626 25.514C4.46626 31.1314 6.65644 36.4057 10.6503 40.3936L42 71.6965L73.3497 40.3936C77.3436 36.4057 79.5337 31.1314 79.5337 25.514C79.5337 19.8966 77.3436 14.6223 73.3497 10.6344C69.3558 6.64651 64.0736 4.45959 58.4478 4.45959C52.8221 4.45959 47.5399 6.64651 43.546 10.6344L41.9571 12.221L40.3681 10.6344C36.4172 6.64651 31.135 4.45959 25.5092 4.45959Z"
            fill="#FF3B63"
          />
        </svg>
        <Text fontSize="36px" color="#FF3B63">
          Grand Sangeet
        </Text>
      </HStack>
      <Text textAlign="center" h="100px" w="600px">
        Blazing fast web hosting for individuals and businesses of all sizes
        backed by 24x7x365 Support.Blazing fast web.
      </Text>
      <HStack spacing={'120px'} direction={['column', 'row']}>
        <VStack>
          <Box
            w={'180px'}
            h={'230px'}
            boxShadow="5px 5px 11px 0px #0000001A"
            rounded={'17px'}
            bg={'white'}
            as={Center}
          >
            <Image src={origin} />
          </Box>
          <Text fontSize="30px">Origin</Text>
          <Text fontSize="18px" color="#707070" textAlign="center">
            Blazing fast web hosting for individuals <br />
            and businesses of all sizes backed by <br />
            24x7x365 Support.Blazing fast web. <br />
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
            <Image src={mission} />
          </Box>
          <Text fontSize="30px">Mission</Text>
          <Text fontSize="18px" color="#707070" textAlign="center">
            Blazing fast web hosting for individuals <br />
            and businesses of all sizes backed by <br />
            24x7x365 Support.Blazing fast web. <br />
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
            <Image src={vision} />
          </Box>
          <Text fontSize="30px">Vision</Text>
          <Text fontSize="18px" color="#707070" textAlign="center">
            Blazing fast web hosting for individuals <br />
            and businesses of all sizes backed by <br />
            24x7x365 Support.Blazing fast web. <br />
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

export default About;
