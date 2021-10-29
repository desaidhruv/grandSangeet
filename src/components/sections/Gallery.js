import React from 'react';
import {
  VStack,
  Image,
  Text,
  Center,
  Flex,
  SimpleGrid,

} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Gallery1 from '../../assets/photos/gallery1.jpeg';
import Gallery2 from '../../assets/photos/gallery2.jpeg';
import Gallery3 from '../../assets/photos/gallery3.jpeg';
import Gallery4 from '../../assets/photos/WhatsApp Image 2021-10-09 at 7.15.02 PM.jpeg';
import Gallery5 from '../../assets/photos/gallery5.jpeg';
import Gallery6 from '../../assets/photos/gallery6.jpeg';
import Gallery7 from '../../assets/photos/gallery7.jpeg';
import Gallery8 from '../../assets/photos/WhatsApp Image 2021-10-09 at 7.15.07 PM.jpeg';
// import Gallery9 from '../../assets/photos/WhatsApp Image 2021-10-09 at 7.15.08 PM.jpeg';
// import Gallery10 from '../../assets/photos/WhatsApp Image 2021-10-09 at 7.15.09 PM.jpeg';
// import Gallery11 from '../../assets/photos/WhatsApp Image 2021-10-09 at 7.15.10 PM.jpeg';
// import Gallery12 from '../../assets/photos/WhatsApp Image 2021-10-09 at 7.15.11 PM.jpeg';
import { Divider } from './Divider';
import './gallery.css';

export default function Gallery() {

  return (
    <>
      <Flex direction="column" spacing="15px" as={Center} h="800px" id="gallery">
        <Text fontSize="36px" fontWeight="medium">
          Gallery
        </Text>
        <Tabs colorScheme="brand.100" isFitted>
          <Center>
            <TabList outlineColor="brand.100" as={Center} w={['300px', '300px', '400px']}>
              <Tab ringColor="brand.100">All</Tab>
              <Tab ringColor="brand.100">Images</Tab>
              <Tab ringColor="brand.100">Videos</Tab>
            </TabList>
          </Center>

          <TabPanels>
            <TabPanel>
              <SimpleGrid
                columns={[2, 2, 4, 4]}
                spacingX="18px"
                spacingY="20px"
              >
                <VStack display={['none', 'none', 'flex', 'flex']}>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery1}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack display={['none', 'none', 'flex', 'flex']}>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery2}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <iframe
                    height="100%"
                    width="100%"
                    src="https://www.youtube.com/embed/8Pot-rK-13Y?modestbranding=1&autoplay=1&showinfo=0&controls=0"
                    title="YouTube video player"
                    frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="ytVideo"
                  ></iframe>
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery4}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery5}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery6}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery7}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery8}
                    borderRadius="15px"
                  />
                </VStack>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                columns={[2, 2, 4, 4]}
                spacingX="18px"
                spacingY="20px"
              >
                <VStack display={['none', 'none', 'flex', 'flex']}>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery1}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack display={['none', 'none', 'flex', 'flex']}>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery2}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery3}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery4}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery5}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery6}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery7}
                    borderRadius="15px"
                  />
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery8}
                    borderRadius="15px"
                  />
                </VStack>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                columns={[2, 2, 2, 2]}
                spacingX="18px"
                spacingY="20px"
              >
                <iframe
                  height="100%"
                  width="100%"
                  src="https://www.youtube.com/embed/8Pot-rK-13Y?controls=0"
                  title="YouTube video player"
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="ytVideo"
                ></iframe>
                <iframe 
                  height="100%"
                  width="100%"
                  src="https://www.youtube.com/embed/LtvnCpdx94M?controls=0&modestbranding=0" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                  className="ytVideo"
                  ></iframe>
                {/* <iframe
                  src="https://www.youtube.com/embed/-mMF-VoHTJ8?start=67"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <iframe
                  src="https://www.youtube.com/embed/-mMF-VoHTJ8?start=67"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  src="https://www.youtube.com/embed/-mMF-VoHTJ8?start=67"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe> */}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Divider />
    </>
  );
}
