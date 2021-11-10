import React from "react";
import { Image, Flex, Box, Center } from "@chakra-ui/react";
import gsLoading from "../assets/photos/gs loading 1.gif";
function Loading() {
  return (
    <>
      {/* <Box display="flex" justifyContent="center" alignItems="center" h={'100vh'} w={'100%'}> */}
      <Flex as={Center} h={"100vh"} backgroundColor="#FBEBF0">
        <Box as={Center} h="100vh" w="100%"  >
          <Image src={gsLoading} />
        </Box>
      </Flex>
    </>
  );
}

export default Loading;
