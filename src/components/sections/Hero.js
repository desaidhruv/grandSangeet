import {
  Box,
  Center,
  Button,
  VStack,
  Text,
  Flex,
  Link,
  useMediaQuery,
  Spacer,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import gsmp4 from "../../assets/photos/gs.mp4";
import gsmp4Mob from "../../assets/photos/gs1.mp4";
import heroArrow from "../../assets/photos/hero arrow.png";
import "@fontsource/poppins";
import "./Hero.css";
import { Divider } from "./Divider";
import "../../App.css";
export default function Hero() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isLargerThan1280 ? (
        <video
          style={{
            position: "absolute",
            height: "100vh",
            width: "100%",
            objectFit: "cover",
          }}
          loop
          height="100vh"
          autoPlay
        >
          <source src={gsmp4} type="video/mp4" />
        </video>
      ) : (
        <video
          style={{
            position: "absolute",
            height: "100vh",
            width: "100%",
            objectFit: "cover",
          }}
          loop
          height="100vh"
          autoPlay
        >
          <source src={gsmp4Mob} type="video/mp4" />
        </video>
      )}
      <Box
        w="full"
        h="100vh"
        pos="relative"
      >
        {/* <video>    */}

        <Box
          w="full"
          bg="black"
          opacity=".6"
          h="full"
          position="absolute"
        ></Box>
        <Navbar />

        <Flex
          as={Center}
          zIndex="2"
          h="80%"
          color="white"
          flexDirection="column"
        >
          <Box></Box>
          <Spacer />
          <VStack spacing="20px">
            <Text
              fontSize={["46px", "40px", "96px"]}
              zIndex="2"
              className="fontClass"
            >
              Grand Sangeet
            </Text>
            <Text
              fontFamily="Poppins"
              zIndex="2"
              textAlign="center"
              fontSize={["14px", "14px", "20px"]}
              w={["80%", "100%"]}
              h="65px"
            >
              India's favourite wedding choreogaphy brand.
            </Text>
            <Button
              style={{ textDecoration: "none" }}
              textDecoration="none"
              textDecorationLine="none"
              as={Link}
              href="tel:+918328856530"
              fontFamily="Poppins"
              fontWeight="normal"
              fontSize={["14px", "14px", "20px"]}
              bg="brand.100"
              w={["120px", "200px", "200px"]}
              h={["40px", "60px", "60px"]}
              _hover={{ bg: "#FBB1C3", color: "#FF3B63" }}
            >
              Book now
            </Button>
          </VStack>
          <Spacer />

          <Box justifyContent="end" className="arrow bounce">
            <Image src={heroArrow} />
          </Box>
        </Flex>
      </Box>
      <Divider />
    </>
  );
}
