import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import { CiCircleInfo, CiSaveDown1, CiSaveUp1 } from "react-icons/ci";

const ProtfoliSection = () => {
	return (
		<HStack
			justify="space-between"
			bg="white"
			borderRadius="xl"
			p="6"
			align={{
				base: "flex-start",
				xl: "center",
			}}
			flexDir={{
				base: "column",
				xl: "row",
			}}>
			<HStack
				spacing={{
					base: 0,
					xl: 16,
				}}
				align={{
					base: "flex-start",
					xl: "center",
				}}
				flexDir={{
					base: "column",
					xl: "row",
				}}>
				<Stack>
					<HStack color="black.80">
						<Text fontSize="sm">
							Total Portflio Value
							<Icon as={CiCircleInfo} />
						</Text>
					</HStack>
					<Text textStyle="h2" fontWeight="medium">
						₹ 112,321
					</Text>
				</Stack>
				<Stack>
					<HStack color="black.80">
						<Text fontSize="sm">Wallet Balance</Text>
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
							<Tag> BTC</Tag>
						</HStack>
						<HStack>
							<Text textStyle="h2" fontWeight="medium">
								₹1,300.4
							</Text>
							<Tag>INR</Tag>
						</HStack>
					</HStack>
				</Stack>
			</HStack>

			<HStack>
				<Button>
					<Icon as={CiSaveDown1} /> Wallet Deposit
				</Button>
				<Button>
					<Icon as={CiSaveUp1} />
					Withdraw
				</Button>
			</HStack>
		</HStack>
	);
};

export default ProtfoliSection;
