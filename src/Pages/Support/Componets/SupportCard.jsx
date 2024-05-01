import React from "react";
import { Flex, Stack, Icon, Text, Card, HStack } from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Checkbox,
	Button,
	Box,
} from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";

const SupportCard = () => {
	return (
		<Flex
			gap="6"
			flexDir={{
				base: "column",
				xl: "row",
			}}>
			<Stack>
				<Icon as={IoIosMail} boxSize={8} color="purple" />
				<Text textStyle="h1" fontSize="3rem" fontWeight="medium">
					Contact Us
				</Text>
				<Text textStyle="sx">
					Have a question or just want to know more? Feel free to reach out to
					us.
				</Text>
			</Stack>
			<Card p="6" borderRadius="1rem">
				<Stack spacing="4">
					<Text textStyle="sm " fontWeight="medium" p="6" borderRadius="1rem">
						Have a question or just want to know more? Feel free to reach out to
						us.
					</Text>
					<HStack
						flexDir={{
							base: "column",
							md: "row",
						}}>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel>Surname </FormLabel>
							<Input type="text" />
						</FormControl>
					</HStack>
					<FormControl>
						<FormLabel>Email </FormLabel>
						<Input type="email" />
					</FormControl>
					<FormControl>
						<FormLabel>Message </FormLabel>
						<Textarea placeholder="Write Your Message" />
					</FormControl>
					<Checkbox>
						I agree with
						<Box as="span" color="p.purple">
							{"  "}
							Terms & Conditions.
						</Box>
					</Checkbox>
					<Stack m="2">
						<Button colorScheme="gray" fontSize="sx" fontWeight="medium">
							{" "}
							Send Message
						</Button>
						<Button fontSize="sx" fontWeight="medium">
							Book Metting
						</Button>
					</Stack>
				</Stack>
			</Card>
		</Flex>
	);
};

export default SupportCard;
