import { Container, Box, VStack, HStack, Text, Heading, Button, Image, IconButton } from "@chakra-ui/react";
import { FaBook, FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to the Book Section
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Discover a world of knowledge and adventure with our curated selection of books.
          </Text>
        </Box>

        <HStack spacing={4} justify="center" wrap="wrap">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE2OTM0NzM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Book Cover" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                Book Title 1
              </Heading>
              <Text mb={4}>Author: John Doe</Text>
              <Text fontSize="sm" color="gray.600" mb={4}>
                A brief description of the book goes here. It provides an overview of the book's content and what readers can expect.
              </Text>
              <Button rightIcon={<FaArrowRight />} colorScheme="teal" variant="solid">
                Read More
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE2OTM0NzM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Book Cover" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                Book Title 2
              </Heading>
              <Text mb={4}>Author: Jane Smith</Text>
              <Text fontSize="sm" color="gray.600" mb={4}>
                A brief description of the book goes here. It provides an overview of the book's content and what readers can expect.
              </Text>
              <Button rightIcon={<FaArrowRight />} colorScheme="teal" variant="solid">
                Read More
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE2OTM0NzM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Book Cover" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                Book Title 3
              </Heading>
              <Text mb={4}>Author: Emily Johnson</Text>
              <Text fontSize="sm" color="gray.600" mb={4}>
                A brief description of the book goes here. It provides an overview of the book's content and what readers can expect.
              </Text>
              <Button rightIcon={<FaArrowRight />} colorScheme="teal" variant="solid">
                Read More
              </Button>
            </Box>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
