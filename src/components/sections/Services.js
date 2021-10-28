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
import DancerPhone from '../../assets/photos/bg troop mb.png';
import choreographerPhone from '../../assets/photos/visual mb.png';
import anchorPhone from '../../assets/photos/anchor mb.png';
import serviceLine from '../../assets/photos/serviceline.png';
import { Divider } from './Divider';

function Services() {
  return (
    <>
      <VStack as={Center}>
        <Text
          p="20px"
          fontSize={['20px', '20px', '36px']}
          className="fontClass"
        >
          Additional Services
        </Text>

        <Flex
          w="full"
          justify="space-evenly"
          fontFamily="Poppins"
          pb="40px"
          spacing={'120px'}
          direction={['column', 'column', 'column', 'row']}
        >
          <VStack>
            <Box
              w={['147px', '147px', '180px', '180px']}
              h={['178px', '178px', '178px', '230px']}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image
                src={{ sm: DancerPhone, md: dancer, lg: dancer, xl: dancer }}
              />
            </Box>
            <Text fontSize={['20px', '20px', '30px']}>Background Dancer</Text>
            <Text
              fontSize={['12px', '12px', '18px']}
              color="#707070"
              textAlign="center"
            >
              Are you someone who dreams of their sangeet to <br />
              be nothing less than an award show? Our <br />
              background troupe of performers are trained <br />
              to make you appear like a star and that will <br />
              definitely leave your padosis and ristedars <br />
              Star-struck!
            </Text>
          </VStack>

          <VStack>
            <Box
              w={['147px', '147px', '180px', '180px']}
              h={['178px', '178px', '178px', '230px']}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image src={[anchorPhone, anchor, anchor, anchor]} />
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
              your day to rock-and-roll.
            </Text>
          </VStack>
          <VStack>
            <Box
              w={['147px', '147px', '180px', '180px']}
              h={['178px', '178px', '178px', '230px']}
              boxShadow="5px 5px 11px 0px #0000001A"
              rounded={'17px'}
              bg={'white'}
              as={Center}
            >
              <Image
                src={[
                  choreographerPhone,
                  choreographer,
                  choreographer,
                  choreographer,
                ]}
              />
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
            </Text>
          </VStack>
        </Flex>
      </VStack>
      <Divider />
    </>
  );
}

export default Services;
