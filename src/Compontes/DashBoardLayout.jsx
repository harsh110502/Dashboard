import SideDrawer from "./SideDrawer";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";

const DashBoardLayout = ({ title, children }) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	return (
		<Flex>
			<Box
				display={{
					base: "none",
					lg: "flex",
				}}>
				<SideNav />
			</Box>
			<SideDrawer isOpen={isOpen} onClose={onClose} />
			<Box flexGrow={1}>
				<TopNav title={title} onOpen={onOpen} />
				<Container
					overflowX="hidden"
					overflowY="auto"
					h="calc(100vh - 88px)"
					mt="6"
					maxW="70rem">
					{children}
				</Container>
			</Box>
		</Flex>
	);
};

export default DashBoardLayout;
