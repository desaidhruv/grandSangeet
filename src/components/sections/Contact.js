import React from "react";
import {
  Flex,
  FormControl,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  HStack,
  useDisclosure,
  Center,
  VStack,
  Icon,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { Divider } from "./Divider";
import mailIcon from "../../assets/photos/mailIcon.svg";
import location from "../../assets/photos/location.svg";
import ImageModal from "../../assets/photos/Modal.svg";
import phone from "../../assets/photos/phone.svg";
import contact from "../../assets/photos/contact.png";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    message: "",
  });
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const { name, email, number, date, message } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://v1.nocodeapi.com/kkeval/google_sheets/JxXOUpuppfEujiAB?tabId=Sheet2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, number, date, message, new Date().toLocaleString()],
          ]),
        }
      ).then(() => {
        onOpen2();
        setTimeout(() => {
          onClose2();
        }, 1000);
      });
      setData({ name: "", email: "", number: "", message: "", date: "" });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  return (
    <Box fontFamily="Poppins" w="full" id="contact">
      <Text fontSize="48px" h="150px" as={Center} fontWeight="medium">
        Contact us
      </Text>
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
                Our team member will reach you soon{" "}
              </Text>
              {/* <Text
                color={["#808080", "black", "black", "black"]}
                fontFamily="Poppins"
                fontSize={["14px", "20px", "24px"]}
                fontWeight="light"
                textAlign="center"
              >
                As your application approved you will received the mail.
              </Text> */}
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

      <Flex
        justifyContent="space-evenly"
        direction="row"
        alignItems="center"
        w="inherit"
        as={Center}
        pb="30px"
      >
        <VStack w={["80%", "80%", "50%"]} as={Center}>
          <form onSubmit={handleSubmit}>
            <Flex
              direction={["column", "column", "column", "row"]}
              h="200px"
              justify="space-evenly"
              w="full"
              // spacing="60px"
            >
              <FormControl id="name">
                <FormLabel color="brand.100">Full Name</FormLabel>
                <Input
                  required={true}
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Name"
                  variant="flushed"
                  type="name"
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel color="brand.100">Email</FormLabel>
                <Input
                  required={true}
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  variant="flushed"
                  type="email"
                />
              </FormControl>
            </Flex>
            <Flex
              justify="space-evenly"
              h="200px"
              direction={["column", "column", "column", "row"]}
              w="full"
              spacing="60px"
            >
              <FormControl id="phone">
                <FormLabel color="brand.100">Phone Number</FormLabel>
                <Input
                  required={true}
                  name="number"
                  value={number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  variant="flushed"
                  type="number"
                />
              </FormControl>
              <FormControl id="date">
                <FormLabel color="brand.100">Event date</FormLabel>
                <Input
                  required={true}
                  name="date"
                  value={date}
                  onChange={handleChange}
                  placeholder="DD/MM/YY"
                  variant="flushed"
                  type="date"
                />
              </FormControl>
            </Flex>
            <HStack w="full">
              <FormControl id="Message">
                <FormLabel color="brand.100">Message</FormLabel>
                <Input
                  required={true}
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  variant="flushed"
                  type="text"
                />
              </FormControl>
            </HStack>
            <Flex pt="20px" pb="20px">
              <Button
                type="submit"
                _hover={{ bg: "#FBB1C3", color: "#FF3B63" }}
                size="md"
                bgColor="brand.100"
                color="white"
              >
                Send message
              </Button>
            </Flex>

            <Box bgColor="#FFF8F9" borderRadius="18px" p="20px" w="full">
              <Flex flexDir="column" w="full">
                <Text
                  as={Center}
                  fontSize="18px"
                  pt="20px"
                  pb="20px"
                  fontWeight="bold"
                >
                  Subscribe to our newsletter
                </Text>
                <InputGroup>
                  <Input placeholder="Enter email address" />
                  <InputRightElement w="100px">
                    <Button
                      _hover={{ bg: "#FBB1C3", color: "#FF3B63" }}
                      color="white"
                      bgColor="brand.100"
                    >
                      Subscribe
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Flex
                justify="center"
                // h="400px"
                pt="50px"
                w="inherit"
                // border="2px solid red"
                justify="space-evenly"
                direction={["column", "column", "column", "row"]}
                // justifyContent="space-between"
                // as={Center}
                // align="center"
                // w="80%"
                fontSize="13px"
                as={Center}
              >
                <VStack w={["80%", "30%"]} spacing="10px">
                  <Image src={mailIcon} />
                  <Text textAlign="center">Support@grandsangeet.com</Text>
                </VStack>
                <VStack w={["80%", "30%"]} spacing="10px">
                  <Image src={location} />
                  <Text textAlign="center">
                    Prabhat lane, duttatota, puri, odisha, 752001
                  </Text>
                </VStack>
                <VStack w={["80%", "30%"]} spacing="10px">
                  <Image src={phone} />
                  <Text textAlign="center">+91 7327819258, +91 8328856530</Text>
                </VStack>
              </Flex>
            </Box>
          </form>
        </VStack>

        <Box display={["none", "none", "flex", "flex"]}>
          <Image src={contact} />
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
}
