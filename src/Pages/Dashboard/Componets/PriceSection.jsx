import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import {
	HStack,
	Stack,
	Icon,
	Text,
	Tag,
	Button,
	Flex,
	Image,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import { CiCircleInfo, CiSaveDown1, CiSaveUp1 } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";

const PriceSection = () => {
	const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
	return (
		<CustomCard>
			<Flex justify="space-between" align="start">
				<Stack>
					<HStack color="black.80">
						<Text fontSize="sm">Current Price</Text>
					</HStack>
					<HStack
						spacing={4}
						align={{
							base: "flex-start",
							xl: "center",
						}}
						flexDir={{
							base: "column",
							lg: "row",
						}}>
						<HStack>
							<Text textStyle="h2" fontWeight="medium">
								₹121,2354
							</Text>
						</HStack>
						<HStack>
							<Text fontSize="sm" fontWeight="medium" color="green.500">
								<Icon as={FaArrowTrendUp} />
								0.04%
							</Text>
						</HStack>
					</HStack>
				</Stack>
				<HStack>
					<Button>
						<Icon as={CiSaveDown1} /> Buy
					</Button>
					<Button>
						<Icon as={CiSaveUp1} />
						Sell
					</Button>
				</HStack>
			</Flex>

			<Tabs variant="soft-rounded">
				<Flex justify="end">
					<TabList bg="black.5" p="3px">
						{["1H", "1D", "1W", "1M"].map((tab) => (
							<Tab
								_selected={{ bg: "white" }}
								key={tab}
								fontSize="sm"
								p="6px"
								borderRadius="4">
								{tab}
							</Tab>
						))}
					</TabList>
				</Flex>
				<TabPanels>
					<TabPanel>
						<Image w="100%" src="/graph.svg" />
					</TabPanel>
					<TabPanel>
						<Image w="100%" src="/graph.svg" />
					</TabPanel>
				</TabPanels>
			</Tabs>

			<HStack justify="space-between">
				{timestamps.map((timestamp) => (
					<Text key={timestamp} fontSize="sm" color="black.80">
						{timestamp}
					</Text>
				))}
			</HStack>
		</CustomCard>
	);
};

export default PriceSection;
