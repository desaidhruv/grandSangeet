import React from "react";
import {
  VStack,
  Image,
  Button,
  Text,
  Center,
  Flex,
  FormControl,
  FormLabel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import globalScope from "../../assets/photos/global scope.png";
import mentoring from "../../assets/photos/mentoring.png";
import businessGrowth from "../../assets/photos/business growth.png";
import salesTeam from "../../assets/photos/sales team.png";
import ImageModal from "../../assets/photos/Modal.svg";
import { Divider } from "./Divider";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

function Community() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    link: "",
  });
  const { name, email, number, link } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://v1.nocodeapi.com/kkeval/google_sheets/JxXOUpuppfEujiAB?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, number, link, new Date().toLocaleString()],
          ]),
        }
      ).then(() => {
        onOpen2();
        setTimeout(() => {
          onClose2();
        }, 1000);
      });
      setData({ name: "", email: "", number: "", link: "" });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  return (
    <>
      <VStack as={Center} spacing={["5px", "10px", "40px", "45px"]}>
        <Text fontSize={["24px", "24px", "32px", "36px"]} className="fontClass">
          Join our community!
        </Text>
        <Text fontSize={["20px", "20px", "32px", "33px"]} fontWeight="bold">
          Why to join us?
        </Text>
        <Flex
          p="40px 0px"
          justify={["stretch", "stretch", "stretch", "space-evenly"]}
          w={["75%", "80%", "80%", "95%"]}
          h="full"
          overflowY="hidden"
          overflowX="auto"
        >
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={["121px", "121px", "121px", "290px"]}
            h={["298px", "298px", "298px", "477px"]}
            rounded={"17px"}
            bg={"white"}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={["10px", "15px", "18px", "25px"]}
            >
              <Box as={Center}>
                <Image w={["73px", "73px", "73px", "full"]} src={globalScope} />
              </Box>
              <Text
                fontSize={["12px", "12px", "12px", "24px"]}
                textAlign="center"
              >
                Global Scope
              </Text>
              <Text
                w="95%"
                fontSize={["10px", "10px", "10px", "18px"]}
                color="#707070"
                textAlign="center"
              >
                Working with grand sangeet will not only get you to experience
                an exciting challenges but you also get a global exposure of
                making people move and groove on the dance floor.
              </Text>
            </VStack>
          </VStack>
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={["121px", "121px", "121px", "290px"]}
            h={["298px", "298px", "298px", "477px"]}
            rounded={"17px"}
            bg={"white"}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={["10px", "15px", "18px", "25px"]}
            >
              <Box as={Center}>
                <Image w={["73px", "73px", "73px", "full"]} src={mentoring} />
              </Box>
              <Text
                fontSize={["12px", "12px", "12px", "24px"]}
                textAlign="center"
              >
                Mentoring
              </Text>
              <Text
                w="95%"
                fontSize={["10px", "10px", "10px", "18px"]}
                color="#707070"
                textAlign="center"
              >
                You will get mentored by industry experts which will eventually
                enhance your expertise and will lead you to the path of becoming
                a successful wedding choreographer.
              </Text>
            </VStack>
          </VStack>
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={["121px", "121px", "121px", "290px"]}
            h={["298px", "298px", "298px", "477px"]}
            rounded={"17px"}
            bg={"white"}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={["10px", "15px", "18px", "25px"]}
            >
              <Box as={Center}>
                <Image
                  w={["73px", "73px", "73px", "full"]}
                  src={businessGrowth}
                />
              </Box>
              <Text
                fontSize={["12px", "12px", "12px", "24px"]}
                textAlign="center"
              >
                Business Growth
              </Text>
              <Text
                w="95%"
                fontSize={["10px", "10px", "10px", "18px"]}
                color="#707070"
                textAlign="center"
              >
                Working with us gives you an opportunity of getting a lot of
                clients and an increase in revenue. Because you become a part of
                a highly motivated team.
              </Text>
            </VStack>
          </VStack>
          <VStack
            boxShadow="5px 5px 11px 0px #0000001A"
            w={["121px", "121px", "121px", "290px"]}
            h={["298px", "298px", "298px", "477px"]}
            rounded={"17px"}
            bg={"white"}
            as={Center}
            mr="20px"
            flex="0 0 auto"
          >
            <VStack
              fontFamily="Poppins"
              spacing={["10px", "15px", "18px", "25px"]}
            >
              <Box as={Center}>
                <Image w={["73px", "73px", "73px", "full"]} src={salesTeam} />
              </Box>
              <Text
                fontSize={["12px", "12px", "12px", "24px"]}
                textAlign="center"
              >
                Sales Team
              </Text>
              <Text
                w="95%"
                fontSize={["10px", "10px", "10px", "18px"]}
                color="#707070"
                textAlign="center"
              >
                Grand sangeet offers you a personalized sales team who are
                highly trained in bringing the best deal on the table by
                understanding the clients need.
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </VStack>
      <Modal size="xs" onClose={onClose2} isOpen={isOpen2}>
        <ModalOverlay />
        <ModalContent mt="200px" fontFamily="Poppins" borderRadius="20px">
          <ModalBody>
            <Center fontSize="25px" h="150px">
              ✔️ Submitted!
            </Center>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <Modal size="5xl" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent fontFamily="Poppins" borderRadius="20px" bg="#FFECF1">
          <Icon
            fontSize="40px"
            color="#F178B6"
            pos="absolute"
            right="10px"
            top="10px"
            onClick={onClose}
            cursor="pointer"
            as={AiOutlineCloseCircle}
          />

          <Text p="20px" as={Center} fontSize={["30px", "30px", "40px"]}>
            Join our community!
          </Text>
          <form onSubmit={handleSubmit}>
            <Flex
              fontSize={["25px", "25px", "35px"]}
              justify="space-evenly"
              pt="50px"
              justify="center"
              w="full"
              direction="row"
            >
              <Flex
                direction="row"
                w={["90%", "90%", "60%"]}
                as={Center}
                justify="space-evenly"
              >
                <FormControl w="40%" id="name" pr="20px">
                  <FormLabel color="brand.100">Full Name</FormLabel>
                  <Input
                    required={true}
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    variant="flushed"
                    type="name"
                  />
                </FormControl>
                <FormControl w="40%" id="email">
                  <FormLabel color="brand.100">Email</FormLabel>
                  <Input
                    required={true}
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="johndoe@gmail.com"
                    variant="flushed"
                    type="email"
                  />
                </FormControl>
              </Flex>
            </Flex>
            <Flex
              fontSize={["25px", "25px", "35px"]}
              pt="50px"
              justify="center"
              w="full"
              direction="row"
            >
              <Flex
                direction="row"
                w={["90%", "90%", "60%"]}
                as={Center}
                justify="space-evenly"
              >
                <FormControl w="40%" id="number" pr="20px">
                  <FormLabel color="brand.100">Phone Number</FormLabel>
                  <Input
                    required={true}
                    name="number"
                    value={number}
                    onChange={handleChange}
                    placeholder="e.g. 999-999-9999"
                    variant="flushed"
                    type="name"
                  />
                </FormControl>
                <FormControl w="40%" id="link">
                  <FormLabel color="brand.100">Social Media Link</FormLabel>
                  <Input
                    required={true}
                    name="link"
                    value={link}
                    onChange={handleChange}
                    placeholder="URL"
                    variant="flushed"
                  />
                </FormControl>
              </Flex>
            </Flex>
            <Box p="50px" as={Center}>
              <Button
                type="submit"
                required={true}
                // onClick={handleSubmit}
                fontSize={["18px", "20px", "30px"]}
                bg="#FF3B63"
                size="l"
                _hover={{ bg: "#FBB1C3", color: "#FF3B63" }}
              >
                Join Now
              </Button>
            </Box>
          </form>

          <Box
            display={["none", "flex", "flex"]}
            overflow="hidden"
            pos="absolute"
            right="0"
            bottom="0"
            w="350px"
            h="350px"
          >
            <Image pt="200px" w="100%" h="100%" src={ImageModal} />
          </Box>
        </ModalContent>
      </Modal>
      <VStack height="300px" w="full" spacing="30px" as={Center}>
        <Text textAlign="center" fontSize={["20px", "22px", "32px", "36px"]}>
          Join our community <br /> to help you grow as choreographers.
        </Text>
        <HStack spacing="30px">
          <Button
            onClick={onOpen}
            color="white"
            bgColor="brand.100"
            size="lg"
            _hover={{ bg: "#FBB1C3", color: "#FF3B63" }}
          >
            Join Now
          </Button>
        </HStack>
      </VStack>
      <Divider />
    </>
  );
}

export default Community;
