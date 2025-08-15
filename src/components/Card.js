import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      align="stretch"
      spacing={4}
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />
      <VStack align="start" spacing={2} px={4} pb={4} flex={1}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        <HStack pt={2}>
          <Text fontWeight="bold" color="blue.500">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#3182ce" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
