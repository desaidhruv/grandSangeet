import React from "react";
import { VStack, Image, Text, Box, Center, Flex } from "@chakra-ui/react";
import Dhruv from "../../assets/photos/dhruv.png";
import Sakshi from "../../assets/photos/sakshi.png";
import Keval from "../../assets/photos/keval.png";
import Tushar from "../../assets/photos/tushar.png";
import { Divider } from "./Divider";

function Team() {
  return (
    <VStack as={Center} spacing="35px" p="40px 0px 40px">
      <Text fontSize={["24px", "38px", "48px"]} className="fontClass">
        Meet Our Team
      </Text>
      <Flex
        justify={["stretch", "stretch", "stretch", "space-evenly"]}
        w={["95%", "95%", "95%", "90%"]}
        overflowY="hidden"
        overflowX="auto"
      >
        <VStack
          w={["205px", "205px", "275px"]}
          h={["280px", "300px", "380px"]}
          mr={["20px", "0", "0", "0"]}
        >
          <Box cursor="pointer" w="inherit" role="group" position="relative">
            <Image src={Tushar} />
            <Box
              as={Flex}
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              borderRadius="17px"
              bgColor="#FF3B63"
              visibility="hidden"
              opacity="0"
              style={{ transition: " opacity .2s, visibility .2s" }}
              _groupHover={{ visibility: "visible", opacity: "1" }}
            >
              <Text
                w="90%"
                fontSize={["10px", "12px", "13px"]}
                color="white"
                fontFamily="Poppins"
                // _groupHover={{ translateY: '0' }}
                transition=".2s"
                style={{ transform: "translateY(1em)" }}
                // _hover={{ transform: 'translateY(0)' }}
              >
                Tushar is a highly motivated and self-driven person who has an
                experience of 7 years in wedding choreography industry. He truly
                believes that no celebration is complete without dancing and
                that's how he has choreographed more than 150 weddings.
                Meanwhile, he observed that there are a bunch of problems which
                has to be resolved and that's how he founded grand sangeet.
              </Text>
            </Box>
          </Box>
          <Text fontSize={["12px", "12px", "24px"]}>Tushar Jain</Text>
          <Text color="#464646" fontSize={["9px", "9px", "16px"]}>
            Founder & CEO
          </Text>
        </VStack>
        <VStack
          w={["205px", "205px", "275px"]}
          h={["280px", "300px", "380px"]}
          mr={["20px", "0", "0", "0"]}
        >
          <Box cursor="pointer" w="inherit" role="group" position="relative">
            <Image src={Dhruv} />
            <Box
              as={Flex}
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              borderRadius="17px"
              bgColor="#FF3B63"
              visibility="hidden"
              opacity="0"
              style={{ transition: " opacity .2s, visibility .2s" }}
              _groupHover={{ visibility: "visible", opacity: "1" }}
            >
              <Text
                w="90%"
                fontSize={["12px", "12px", "16px"]}
                color="white"
                fontFamily="Poppins"
                // _groupHover={{ translateY: '0' }}
                transition=".2s"
                style={{ transform: "translateY(1em)" }}
                // _hover={{ transform: 'translateY(0)' }}
              >
                Loves to read books, play sports and listen to music. Passionate
                about simplifying things through technology. 2+ years of
                experience in developing scalable web applications with a knack
                in problem solving.
              </Text>
            </Box>
          </Box>
          <Text fontSize={["12px", "12px", "24px"]}>Dhruv Desai</Text>
          <Text color="#464646" fontSize={["9px", "9px", "16px"]}>
            Freelancer
          </Text>
        </VStack>
        <VStack
          w={["205px", "205px", "275px"]}
          h={["280px", "300px", "380px"]}
          mr={["20px", "0", "0", "0"]}
        >
          <Box cursor="pointer" w="inherit" role="group" position="relative">
            <Image src={Sakshi} />
            <Box
              as={Flex}
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              borderRadius="17px"
              bgColor="#FF3B63"
              visibility="hidden"
              opacity="0"
              style={{ transition: " opacity .2s, visibility .2s" }}
              _groupHover={{ visibility: "visible", opacity: "1" }}
            >
              <Text
                w="90%"
                fontSize={["12px", "12px", "16px"]}
                color="white"
                fontFamily="Poppins"
                // _groupHover={{ translateY: '0' }}
                transition=".2s"
                style={{ transform: "translateY(1em)" }}
                // _hover={{ transform: 'translateY(0)' }}
              >
                Loves to dance with the rhythms, play sports and good with
                numbers. Enthusiast in solving problems that include creativity
                and innovation. 2+ years of experience in delivering quality
                Software applications using Machine Learning.
              </Text>
            </Box>
          </Box>
          <Text fontSize={["12px", "12px", "24px"]}>Sakshi Parikh</Text>
          <Text color="#464646" fontSize={["9px", "9px", "16px"]}>
            Freelancer
          </Text>
        </VStack>
        <VStack
          w={["205px", "205px", "275px"]}
          h={["280px", "300px", "380px"]}
          mr={["20px", "0", "0", "0"]}
        >
          <Box cursor="pointer" w="inherit" role="group" position="relative">
            <Image src={Keval} />
            <Box
              as={Flex}
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              borderRadius="17px"
              bgColor="#FF3B63"
              visibility="hidden"
              opacity="0"
              style={{ transition: " opacity .2s, visibility .2s" }}
              _groupHover={{ visibility: "visible", opacity: "1" }}
            >
              <Text
                w="90%"
                fontSize={["12px", "12px", "16px"]}
                color="white"
                fontFamily="Poppins"
                // _groupHover={{ translateY: '0' }}
                transition=".2s"
                style={{ transform: "translateY(1em)" }}
                // _hover={{ transform: 'translateY(0)' }}
              >
                Pursuing an engineer's Degree focused in Computer Science, with
                wide knowledge and hands-on experience of Web development in
                multiple Start-ups and as a Freelancer. Skilled in Problem
                Solving, React.js and creativity and a Professional Photographer.
              </Text>
            </Box>
          </Box>
          <Text fontSize={["12px", "12px", "24px"]}>Keval Panchal</Text>
          <Text color="#464646" fontSize={["9px", "9px", "16px"]}>
            Freelancer
          </Text>
        </VStack>
      </Flex>
      <Divider />
    </VStack>
  );
}

export default Team;
