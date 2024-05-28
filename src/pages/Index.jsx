import { Container, Box, VStack, HStack, Text, Heading } from "@chakra-ui/react";
import BookCard from "../components/BookCard";

const books = [
  {
    title: "Book Title 1",
    author: "John Doe",
    description: "A brief description of the book goes here. It provides an overview of the book's content and what readers can expect.",
    imageUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE2OTM0NzM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Book Title 2",
    author: "Jane Smith",
    description: "A brief description of the book goes here. It provides an overview of the book's content and what readers can expect.",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE2OTM0NzM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Book Title 3",
    author: "Emily Johnson",
    description: "A brief description of the book goes here. It provides an overview of the book's content and what readers can expect.",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE2OTM0NzM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

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
          {books.map((book, index) => (
            <BookCard key={index} title={book.title} author={book.author} description={book.description} imageUrl={book.imageUrl} />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
