import { Box, HStack, Icon, Stack, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
	const location = useLocation();
	const isActiveLink = (link) => {
		return location.pathname == link;
	};
	const navLinks = [
		{
			icon: RxDashboard,
			text: "Dashboard",
			link: "/",
		},
		{
			icon: GrTransaction,
			text: "Transaction",
			link: "/transaction",
		},
	];

	return (
		<Stack
			bg="white"
			justify="space-between"
			boxShadow={{
				base: "none",
				lg: "lg",
			}}
			w={{
				base: "full",
				lg: "16rem",
			}}
			h="100vh">
			<Box>
				<Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
					CRYPTO ANALIES
				</Heading>
				<Box mx="3" mt="6">
					{navLinks.map((nav) => (
						<Link to={nav.link} key={nav.text}>
							<HStack
								borderRadius="10px"
								py="2"
								px="4"
								bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
								color={isActiveLink("/support") ? "#171717" : "#797E82"}
								_hover={{ bg: "#F3F3F7", color: "#171717" }}>
								<Icon as={nav.icon} />
								<Text fontSize="14px" fontWeight="medium">
									{nav.text}
								</Text>
							</HStack>
						</Link>
					))}
				</Box>
			</Box>
			<Box mx="3" mt="6">
				<Link to="/Support">
					<HStack
						borderRadius="10px"
						py="2"
						px="4"
						bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
						color={isActiveLink("/support") ? "#171717" : "#797E82"}
						_hover={{ bg: "#F3F3F7", color: "#171717" }}>
						<Icon as={BiSupport} />
						<Text fontSize="14px">Support</Text>
					</HStack>
				</Link>
			</Box>
		</Stack>
	);
};

export default SideNav;
