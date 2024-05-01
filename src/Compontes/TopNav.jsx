import { Flex, HStack, Box, Icon } from "@chakra-ui/react";
import { Heading, Container } from "@chakra-ui/react";
import { FaRegUserCircle, FaBars } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const TopNav = ({ title, onOpen }) => {
	return (
		<Box px="4" bg="white">
			<HStack maxW="70rem" h="16" justify="space-between" mx="auto">
				<Icon
					as={FaBars}
					onClick={onOpen}
					display={{
						base: "block",
						lg: "none",
					}}
				/>
				<Heading fontWeight="medium" fontSize="28px">
					{title}
				</Heading>

				<Menu>
					<MenuButton>
						<Icon as={FaRegUserCircle} fontSize="24px" />
					</MenuButton>
					<MenuList>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Support</MenuItem>
						<MenuItem>Logout</MenuItem>
					</MenuList>
				</Menu>
			</HStack>
		</Box>
	);
};

export default TopNav;
