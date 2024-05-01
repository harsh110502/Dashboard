import DashBoardLayout from "../../Compontes/DashBoardLayout";
import ChatBox from "./Componets/ChatBox";
import SupportCard from "./Componets/SupportCard";
import { HStack, Icon } from "@chakra-ui/react";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

const Support = () => {
	return (
		<DashBoardLayout title="Support" gap={4}>
			<SupportCard />
		</DashBoardLayout>
	);
};

export default Support;
