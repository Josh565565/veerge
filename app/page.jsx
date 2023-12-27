"use client";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import TopNav from "./components/TopNav";
import DashboardNav from "./components/DashboardNav";
import SalesOverview from "./components/SalesOverview";
import PropertyCustomersOverview from "./components/PropertyCustomersOverview";
import ListingOverview from "./components/listingOverview/ListingOverview";
import TotalOutstandingBalance from "./components/totalOutstandingBalance/TotalOutstandingBalance";
import TopSelling from "./components/topSelling/TopSelling";
import Footer from "./components/Footer";
import VeergeAssistant from "./components/VeergeAssistant";

export default function Home() {
  return (
    <Box as="main" position="relative" overflow="hidden">
      <TopNav />
      <DashboardNav />
      <Box ml="83px" py="20px">
        <Flex alignItems="center" gap="5px">
          <Image src="../../images/hand.svg" alt="Logo" />
          <Text color="#191919" fontSize="large">
            Hi Ahmed
          </Text>
        </Flex>
        <Text color="#3D3D3D" fontSize="smaller" mt="5px">
          Welcome to your Dashboard
        </Text>
      </Box>
      <Flex justifyContent="space-between">
        <SalesOverview />
        <PropertyCustomersOverview />
      </Flex>
      <Flex justifyContent="space-between" gap="50px">
        <ListingOverview />
        <TotalOutstandingBalance />
        <TopSelling />
      </Flex>
      <Footer />

      <VeergeAssistant />
    </Box>
  );
}
