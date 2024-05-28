import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const BookCard = ({ title, author, description, imageUrl }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={imageUrl} alt="Book Cover" />
      <Box p={6}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>Author: {author}</Text>
        <Text fontSize="sm" color="gray.600" mb={4}>
          {description}
        </Text>
        <Button rightIcon={<FaArrowRight />} colorScheme="teal" variant="solid">
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default BookCard;
