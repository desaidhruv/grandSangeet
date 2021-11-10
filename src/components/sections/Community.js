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
          // onClose2();
        }, 1500);
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
      <Modal size="5xl" onClose={onClose2} isOpen={isOpen2} w="100%">
        <ModalOverlay />
        <ModalContent
          mt="200px"
          fontFamily="Poppins"
          mt="50px"
          h="600px"
          borderRadius="20px"
          bg="#FFECF1"
        >
          <ModalBody>
            <Icon
              fontSize="40px"
              color="#F178B6"
              pos="absolute"
              right="10px"
              top="10px"
              onClick={onClose2}
              cursor="pointer"
              as={AiOutlineCloseCircle}
            />
            <VStack
              h="full"
              as={Flex}
              spacing="10px"
              justifyContent="center"
              alignItems="center"
            >
              <VStack
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
                direction={["column", "row"]}
                as={Center}
              >
                <svg
                  width="74"
                  height="71"
                  viewBox="0 0 44 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.9597 7.03419C35.2986 5.39043 33.0914 4.48975 30.7476 4.48975C28.4038 4.48975 26.1966 5.39043 24.5355 7.03419L22.7606 8.79053L24.4444 10.4568L26.2193 8.70047C27.4254 7.50705 29.041 6.83154 30.7476 6.83154C32.4542 6.83154 34.0698 7.48454 35.2758 8.70047C36.4819 9.89388 37.1645 11.4926 37.1645 13.1814C37.1645 14.8702 36.5046 16.4689 35.2758 17.6623L32.75 20.1617L19.4839 7.03419C17.8227 5.39043 15.6155 4.48975 13.2717 4.48975C10.928 4.48975 8.72072 5.39043 7.0596 7.03419C5.39848 8.67795 4.48828 10.8621 4.48828 13.1814C4.48828 15.4331 5.35297 17.5497 6.92307 19.1935L8.60694 17.5272C7.49195 16.3338 6.87756 14.8026 6.87756 13.1814C6.87756 11.4926 7.53746 9.89388 8.74347 8.70047C9.94949 7.50705 11.5651 6.83154 13.2717 6.83154C14.9101 6.83154 16.4802 7.4395 17.6634 8.54284C17.709 8.58788 18.4371 9.30843 18.4371 9.30843L7.69674 19.9591L22.0097 34.1224L29.7919 26.4215L22.7378 19.4412L21.0539 21.1075L26.4241 26.4215L22.0097 30.7899L11.0417 19.9591L20.121 10.9747L32.75 23.4718L36.937 19.3286C38.5981 17.6848 39.5083 15.5007 39.5083 13.1814C39.531 10.8621 38.5981 8.67795 36.9597 7.03419Z"
                    fill="#FF3B63"
                  />
                  <path
                    d="M22 40.8571L3.91411 22.7982C1.39468 20.2826 0 16.9134 0 13.3645C0 9.79314 1.39468 6.4464 3.91411 3.93073C6.43354 1.3926 9.78528 0 13.362 0C16.5562 0 19.5706 1.1006 22 3.14459C24.407 1.1006 27.4438 0 30.638 0C34.2147 0 37.5665 1.3926 40.0859 3.90827C42.6053 6.42394 44 9.79314 44 13.342C44 16.9134 42.6053 20.2601 40.0859 22.7758L22 40.8571ZM13.362 2.33598C10.4151 2.33598 7.64826 3.4815 5.55624 5.57041C3.46421 7.65931 2.33947 10.4221 2.33947 13.3645C2.33947 16.3069 3.48671 19.0697 5.57873 21.1586L22 37.5553L38.4213 21.1586C40.5133 19.0697 41.6605 16.3069 41.6605 13.3645C41.6605 10.4221 40.5133 7.65931 38.4213 5.57041C36.3292 3.4815 33.5624 2.33598 30.6155 2.33598C27.6687 2.33598 24.9018 3.4815 22.8098 5.57041L21.9775 6.40148L21.1452 5.57041C19.0757 3.4815 16.3088 2.33598 13.362 2.33598Z"
                    fill="#FFD2DD"
                  />
                </svg>

                <Text
                  fontSize={["24px", "28px", "40px"]}
                  color="#FF3B63"
                  className="fontClass"
                >
                  Grand Sangeet
                </Text>
              </VStack>
              <Text
                as={Center}
                color="#00C11F"
                fontSize={["24px", "28px", "48px"]}
                textAlign="center"
              >
                Thanks for Joining!{" "}
              </Text>
              <Text
                color={["#808080", "black", "black", "black"]}
                fontFamily="Poppins"
                fontSize={["14px", "20px", "24px"]}
                fontWeight="light"
                textAlign="center"
              >
                As your application approved you will received the mail.
              </Text>
            </VStack>
            <Box
              display={["flex", "flex", "flex"]}
              overflow="hidden"
              pos="absolute"
              right={["-20", "0", "0"]}
              bottom="0"

              // w="350px"
              // h="350px"
            >
              <Image
                pt="200px"
                w={["80%", "50%", "100%"]}
                h={["80%", "50%", "100%"]}
                src={ImageModal}
              />
            </Box>
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
