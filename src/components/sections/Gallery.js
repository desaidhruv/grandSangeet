import React from 'react';
import { VStack, Image, Button, Text, Center, HStack } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Rohan from '../../assets/photos/Rohan.png'
import Gallery1 from '../../assets/photos/Gallery1.png'
import Gallery2 from '../../assets/photos/Gallery2.png'
import Gallery3 from '../../assets/photos/Gallery3.png'
import Gallery4 from '../../assets/photos/Gallery4.png'

export default function Gallery() {
    return (
        <>
            <VStack
                spacing="15px"
                as={Center}
                h="1200px"
            >
                <Text fontSize="36px" fontWeight="medium">Gallery</Text>
                <Tabs>
                    <Center>

                        <TabList>
                            <Tab>All</Tab>
                            <Tab>Images</Tab>
                            <Tab>Videos</Tab>
                        </TabList>
                    </Center>

                    <TabPanels>
                        <TabPanel>
                            <VStack>
                                <HStack>
                                    <VStack>
                                        <Image
                                            src={Gallery1}
                                        />
                                        <Text fontSize="24px">Shimla bride</Text>
                                    </VStack>
                                    <VStack>
                                        <Image
                                            src={Gallery2}
                                        />
                                        <Text fontSize="24px">Shimla bride</Text>
                                    </VStack>
                                    <VStack>
                                        <Image
                                            src={Gallery3}
                                        />
                                        <Text fontSize="24px">Shimla bride</Text>
                                    </VStack>
                                    <VStack>
                                        <Image
                                            src={Gallery4}
                                        />
                                        <Text fontSize="24px">Shimla bride</Text>
                                    </VStack>
                                </HStack>
                                <HStack>
                                    <VStack>
                                        <Image
                                            src={Gallery3}
                                        />
                                        <Text fontSize="24px">Shimla bride</Text>
                                    </VStack>
                                    <VStack>
                                        <Image
                                            src={Gallery2}
                                        />
                                        <Text fontSize="24px">Shimla bride</Text>
                                    </VStack>
                                    <VStack>
                                        <Image
                                            src={Gallery1}
                                        />
                                        <Text fontSize="24px">Shimla bride</Text>
                                    </VStack>
                                    <VStack>
                                        <Image
                                            src={Gallery4}
                                        />
                                        <Text fontSize="24px">Shimla bride</Text>
                                    </VStack>
                                </HStack>

                            </VStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack>

                                <VStack>
                                    <Image
                                        src={Gallery1}
                                    />
                                    <Text fontSize="24px">Shimla bride</Text>
                                </VStack>
                                <VStack>
                                    <Image
                                        src={Gallery2}
                                    />
                                    <Text fontSize="24px">Shimla bride</Text>
                                </VStack>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack>
                                <VStack>
                                    <Image
                                        src={Gallery3}
                                    />
                                    <Text fontSize="24px">Shimla bride</Text>
                                </VStack>
                                <VStack>
                                    <Image
                                        src={Gallery4}
                                    />
                                    <Text fontSize="24px">Shimla bride</Text>
                                </VStack>
                            </HStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </VStack>
        </>
    );
}
