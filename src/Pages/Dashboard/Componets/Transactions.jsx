import React, { Fragment } from "react";
import {
	HStack,
	Stack,
	Icon,
	Text,
	Grid,
	Flex,
	Divider,
	Button,
} from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { MdCurrencyRupee } from "react-icons/md";
import { FaBtc } from "react-icons/fa";

const Transactions = () => {
	const transactions = [
		{
			id: "1",
			icon: MdCurrencyRupee,
			text: "INR Deposite",
			time: "2022-08-11 07:19 PM",
			amount: "+81,213",
		},
		{
			id: "2",
			icon: FaBtc,
			text: "BTC Sell",
			time: "2022-08-11 07:19 PM",
			amount: "-12,331,213",
		},
		{
			id: "3",
			icon: MdCurrencyRupee,
			text: "INR Deposite",
			time: "2022-08-11 07:19 PM",
			amount: "-12,331,213",
		},
	];
	return (
		<CustomCard h="full">
			<Text mb="6" fontSize={"sm"} color="black.80">
				Recent Transactions
			</Text>
			<Stack>
				{transactions.map((transaction, i) => (
					<Fragment key={transaction.id}>
						{i !== 0 && <Divider />}
						<Flex gap="4">
							<Grid
								placeItems="center"
								bg="black.5"
								boxSize={10}
								borderRadius="full">
								<Icon as={transaction.icon} />
							</Grid>
							<Flex justify="space-between" w="full">
								<Stack spacing={0}>
									<Text textStyle="h6">{transaction.text}</Text>
									<Text fontSize="sm" color="black.40">
										{transaction.timestamp}
									</Text>
								</Stack>
								<Text textStyle="h6">{transaction.amount}</Text>
							</Flex>
						</Flex>
					</Fragment>
				))}
			</Stack>

			<Button w="full" mt="6" colorScheme="gray">
				View All
			</Button>
		</CustomCard>
	);
};

export default Transactions;
