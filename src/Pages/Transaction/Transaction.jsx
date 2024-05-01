import { Flex, Button, Icon, Card, Tag, HStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import DashBoardLayout from "../../Compontes/DashBoardLayout";
import { CiExport } from "react-icons/ci";
import Transactiontable from "./Componets/Transactiontable";
import { BiSearch } from "react-icons/bi";

const Transaction = () => {
	const tabs = [
		{
			name: "All",
			count: 231,
		},
		{
			name: "Deposite ",
			count: 231,
		},
		{
			name: "Widraw   ",
			count: 231,
		},
		{
			name: "Trad",
			count: 231,
		},
	];
	return (
		<DashBoardLayout title="Trasnaction">
			<Flex justify="end" mt="6" mb="3">
				<Button leftIcon={<Icon as={CiExport} />}> Export CSV</Button>
			</Flex>
			<Card borderRadius="1rem">
				<Tabs>
					<TabList
						pt="4"
						display="flex"
						w="full"
						justifyContent="space-between">
						<HStack>
							{tabs.map((tab) => (
								<Tab key={tab.name} display="flex" gap="2" pb="4">
									{tab.name}
									<Tag colorScheme="gray" borderRadius="full">
										{tab.count}
									</Tag>
								</Tab>
							))}
						</HStack>
						<InputGroup maxW="200px" pr="6">
							<InputLeftElement pointerEvents="none">
								<Icon as={BiSearch} />
							</InputLeftElement>
							<Input type="tel" placeholder="Serch" />
						</InputGroup>
					</TabList>

					<TabPanels>
						<TabPanel>
							<Transactiontable />
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
						<TabPanel>
							<p>three!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Card>
		</DashBoardLayout>
	);
};

export default Transaction;
