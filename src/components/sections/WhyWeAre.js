import React from 'react';
import { VStack, Image, Button, Text, Center } from '@chakra-ui/react';

export default function WhyWeAre() {
    return (
        <>
            <VStack
                spacing="15px"
                as={Center}
                bgColor="#FFD2DD"
                h="500px"
            >
                <Text fontSize="36px" >Why we are?</Text>
                <Text textAlign="center" h="100px" w="600px">
                    Blazing fast web hosting for individuals and businesses of all sizes
                    backed by 24x7x365 Support.Blazing fast web hosting for individuals
                    and businesses of all sizes backed by 24x7x365 Support.
                </Text>
                <Button bg="brand.100" size="l">
                    Explore More
                </Button>
            </VStack>
        </>
    );
}
