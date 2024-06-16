import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Header = () => (
  <Box as="header" bg="gray.800" color="white" py={4}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <HStack spacing={4}>
          <img src="/images/logo.png" alt="FinTimes Logo" width="100" />
          <Heading size="md">FinTimes</Heading>
        </HStack>
        <HStack spacing={8}>
          <Link href="#top-stories">Top Stories</Link>
          <Link href="#latest-news">Latest News</Link>
          <Link href="#market-data">Market Data</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Text>&copy; 2023 FinTimes. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#privacy-policy">Privacy Policy</Link>
        </HStack>
        <HStack spacing={4}>
          <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
          <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
          <Link href="https://linkedin.com" isExternal><FaLinkedin /></Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const MainContent = () => (
  <Container maxW="container.xl" py={8}>
    <VStack spacing={8} align="stretch">
      <Box id="top-stories">
        <Heading size="lg" mb={4}>Top Stories</Heading>
        <Divider />
        <Text>Top story content goes here...</Text>
      </Box>
      <Box id="latest-news">
        <Heading size="lg" mb={4}>Latest News</Heading>
        <Divider />
        <Text>Latest news content goes here...</Text>
      </Box>
      <Box id="market-data">
        <Heading size="lg" mb={4}>Market Data</Heading>
        <Divider />
        <Text>Market data content goes here...</Text>
      </Box>
    </VStack>
  </Container>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <MainContent />
      <Footer />
    </Box>
  );
};

export default Index;