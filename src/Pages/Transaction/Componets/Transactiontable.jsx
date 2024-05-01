import React from "react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	Tag,
	TableContainer,
	Stack,
	Text,
	Icon,
} from "@chakra-ui/react";
import { TiArrowSortedDown } from "react-icons/ti";

const Transactiontable = () => {
	const TableData = [
		{
			id: "HD82NA2H",
			date: "2022-08-12",
			time: "08:56 Pm",
			type: {
				name: "INR Deposite",
				tag: "E-Transper",
			},
			amount: "+89,212,00",
			status: "pending",
		},
		{
			id: "AEFCQAEG ",
			date: "2022-08-12",
			time: "08:56 Pm",
			type: {
				name: "Sell",
				tag: " Bank Transper",
			},
			amount: "+89,212,00",
			status: "processing",
		},
		{
			id: "AFASFAF3",
			date: "2022-08-12",
			time: "08:56 Pm",
			type: {
				name: "BUY",
				tag: "E-Transper",
			},
			amount: "+89,212,00",
			status: "complated",
		},
		{
			id: "EAFASFFSD",
			date: "2022-08-12",
			time: "08:56 Pm",
			type: {
				name: "INR Withdraw",
				tag: "E-Transper",
			},
			amount: "+89,212,00",
			status: "Cansalled",
		},
	];

	const StatusColor = {
		pending: "#797E82",
		processing: "#F5A50B",
		complated: "#059669",
		Cansalled: "#DC2626",
	};

	return (
		<TableContainer>
			<Table colorScheme="gray">
				<Thead>
					<Tr>
						<Th>ID</Th>
						<Th>
							Date& Time
							<Icon as={TiArrowSortedDown} />
						</Th>
						<Th>Type</Th>
						<Th>
							Amount
							<Icon as={TiArrowSortedDown} />
						</Th>
						<Th>Status</Th>
					</Tr>
				</Thead>
				<Tbody>
					{TableData.map((data) => (
						<Tr key={data.id}>
							<Td fontSize="sm" fontWeight="medium">
								{data.id}
							</Td>
							<Td>
								<Stack spacing={0}>
									<Text fontSize="sm" fontWeight="medium">
										{data.date}
									</Text>
									<Text color="black.60" fontSize="xs">
										{data.time}
									</Text>
								</Stack>
							</Td>
							<Td>
								<Stack spacing={0}>
									<Text fontSize="sm" fontWeight="medium">
										{data.type.name}
									</Text>
									<Text color="black.60" fontSize="xs">
										{data.type.tag}
									</Text>
								</Stack>
							</Td>
							<Td fontSize="sm" fontWeight="medium">
								{data.amount}
							</Td>
							<Td fontSize="sm" fontWeight="medium">
								<Tag bg={StatusColor[data.status]} color="#EEEEF4">
									{data.status}
								</Tag>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default Transactiontable;
