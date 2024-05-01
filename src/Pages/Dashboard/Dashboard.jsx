import DashBoardLayout from "../../Compontes/DashBoardLayout";
import { Grid, GridItem } from "@chakra-ui/react";
import PriceSection from "./Componets/PriceSection";
import ProtfoliSection from "./Componets/ProtfoliSection";
import Transactions from "./Componets/Transactions";
import InfoCard from "./Componets/InfoCard";

const Dashborad = () => {
	return (
		<DashBoardLayout title="Dashboard">
			<Grid
				gridtemplatecolumns={{
					base: "repate(1,1fr)",
					xl: "repate(2,1fr)",
				}}
				gap={6}>
				<GridItem
					colSpan={{
						base: 1,
						lg: 2,
					}}>
					<ProtfoliSection />
				</GridItem>
				<GridItem colSpan={1}>
					<PriceSection />
				</GridItem>
				<GridItem colSpan={1}>
					<Transactions />
				</GridItem>
				<GridItem colSpan={1}>
					<InfoCard
						imgUrl="/dot_bg.svg"
						tag="Loan"
						text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
						inverted={false}
					/>
				</GridItem>
				<GridItem colSpan={1}>
					<InfoCard
						imgUrl="/grid_bg.svg"
						tag="Contact"
						text="Learn more about our real estate, mortgage, and  corporate account services"
						inverted={true}
					/>
				</GridItem>
			</Grid>
		</DashBoardLayout>
	);
};

export default Dashborad;
