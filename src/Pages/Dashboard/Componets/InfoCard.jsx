import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { Tag, Stack, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tag, inverted }) => {
	return (
		<CustomCard
			bgImage={imgUrl}
			bgSize="cover"
			bgRepeat="no-repeat"
			bgColor={inverted ? "p.purple" : "white"}>
			<Tag
				bg={inverted ? "white" : "p.purple"}
				color={inverted ? "p.purple" : "white"}
				borderRadius="full">
				{tag}
			</Tag>
			<Stack>
				<Text mt="4" fontWeight="medium" textStyle="h5">
					{text}
				</Text>
			</Stack>
		</CustomCard>
	);
};

export default InfoCard;
