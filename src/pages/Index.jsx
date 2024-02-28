import React from "react";
import { Box, Container, Flex, Heading, Text, Button, Image, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { FaWindows, FaArrowRight } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("purple.500", "purple.700");
  const textColor = useColorModeValue("white", "gray.200");

  return (
    <Box bg={bgColor} color={textColor} minHeight="100vh">
      <Container maxW="container.xl" py={10}>
        <Flex direction="column" align="center" justify="center" minHeight="calc(100vh - 80px)">
          <VStack spacing={10}>
            <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aW5kb3dzJTIwc29mdHdhcmUlMjBzb2x1dGlvbnN8ZW58MHx8fHwxNzA5MTU1NjcyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="SquawkSquad" boxSize="150px" objectFit="cover" borderRadius="full" />
            <Heading as="h1" size="2xl" textAlign="center">
              SquawkSquad Software Solutions
            </Heading>
            <Text fontSize="xl" textAlign="center" px={4} mb={10}>
              Specializing in Python and Node.js applications for all your business needs, with expertise in other technologies as well.
            </Text>
            <Heading as="h2" size="lg" textAlign="center" mb={4}>
              Our Team
            </Heading>
            <VStack spacing={5}>
              <HStack spacing={3} alignItems="center">
                <Image src="https://via.placeholder.com/150" alt="ForgedCore8" boxSize="50px" objectFit="cover" borderRadius="full" />
                <Text fontSize="lg">ForgedCore8 - Seasoned software engineer with a passion for developing innovative solutions.</Text>
              </HStack>
              <HStack spacing={3} alignItems="center">
                <Image src="https://via.placeholder.com/150" alt="DJ Stomp" boxSize="50px" objectFit="cover" borderRadius="full" />
                <Text fontSize="lg">DJ Stomp - Experienced developer committed to delivering high-quality software products.</Text>
              </HStack>
            </VStack>
            <HStack spacing={5}>
              <Button leftIcon={<FaWindows />} colorScheme="blackAlpha">
                Our Products
              </Button>
              <Button rightIcon={<FaArrowRight />} variant="outline" borderColor="whiteAlpha.800">
                Learn More
              </Button>
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
