import React from 'react';
import {
  VStack,
  Image,
  Button,
  Text,
  Center,
  Flex,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Rohan from '../../assets/photos/Rohan.png';
import Gallery1 from '../../assets/photos/Gallery1.png';
import Gallery2 from '../../assets/photos/Gallery2.png';
import Gallery3 from '../../assets/photos/Gallery3.png';
import Gallery4 from '../../assets/photos/Gallery4.png';
import { Divider } from './Divider';
import './gallery.css';

export default function Gallery() {
  return (
    <>
      <Flex direction="column" spacing="15px" as={Center}  h="800px">
        <Text fontSize="36px" fontWeight="medium">
          Gallery
        </Text>
        <Tabs colorScheme="brand.100" isFitted>
          <Center>
            <TabList outlineColor="brand.100" as={Center} w="400px">
              <Tab ringColor="brand.100">All</Tab>
              <Tab ringColor="brand.100">Images</Tab>
              <Tab ringColor="brand.100">Videos</Tab>
            </TabList>
          </Center>

          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={[2,2,2,4]} spacingX="18px" spacingY="20px">
                <VStack  display={["none","none","flex","flex"]}>
                  <Image

                    h={['107px', '107px','107px', '206px']}
                    w={['151px', '151px','151px',  '290px']}
                    src={Gallery1}
                  />
                  <Text fontSize={['12px', '12px', '30px']}>
                  Shimla bride
                  </Text>
                </VStack>
                <VStack display={["none","none","flex","flex"]}>
                  <Image

                    h={['107px', '107px','107px', '206px']}
                    w={['151px', '151px','151px',  '290px']}
                    src={Gallery2}
                  />
                  <Text fontSize={['12px', '12px', '30px']}>
                  Shimla bride
                  </Text>
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px','107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery3}
                  />
                  <Text fontSize={['12px', '12px', '30px']}>
                  Shimla bride
                  </Text>
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px','107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery4}
                  />
                  <Text fontSize={['12px', '12px', '30px']}>
                  Shimla bride
                  </Text>
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px','107px', '206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery1}
                  />
                  <Text ffontSize={['12px', '12px', '30px']}>
                  Shimla bride
                  </Text>
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px','206px']}
                    w={['151px', '151px', '151px', '290px']}
                    src={Gallery2}
                  />
                  <Text fontSize={['12px', '12px', '30px']}>
                  Shimla bride
                  </Text>
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px','206px']}
                    w={['151px', '151px','151px',  '290px']}
                    src={Gallery3}
                  />
                  <Text fontSize={['12px', '12px', '30px']}>
                  Shimla bride
                  </Text>
                </VStack>
                <VStack>
                  <Image
                    h={['107px', '107px', '107px','206px']}
                    w={['151px', '151px','151px',  '290px']}
                    src={Gallery4}
                  />
                  <Text fontSize={['12px', '12px', '30px']}>
                  Shimla bride
                  </Text>
                </VStack>

              
              </SimpleGrid>
              {/* <Image src={Gallery1} />

              <Image src={Gallery2} />

              <Image src={Gallery3} />

              <Image src={Gallery4} />

              <Image src={Gallery3} />

              <Image src={Gallery2} />

              <Image src={Gallery1} />

              <Image src={Gallery4} /> */}
            </TabPanel>
            <TabPanel>
              <HStack>
                <VStack>
                  <Image src={Gallery1} />
                  <Text fontSize="24px">Shimla bride</Text>
                </VStack>
                <VStack>
                  <Image src={Gallery2} />
                  <Text fontSize="24px">Shimla bride</Text>
                </VStack>
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack>
                <VStack>
                  <Image src={Gallery3} />
                  <Text fontSize="24px">Shimla bride</Text>
                </VStack>
                <VStack>
                  <Image src={Gallery4} />
                  <Text fontSize="24px">Shimla bride</Text>
                </VStack>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Button color="white" bgColor="brand.100" size="lg">
          View More
        </Button>
      </Flex>
      <Divider />
    </>
  );
}
