import { Box, Flex, Image, Text, Input } from "@chakra-ui/react";
import DashboardLinks from "./DashboardLinks";

const dashLinks = [
  {
    title: "Dashboard",
    img: "../../images/Home.svg",
    isActive: true,
  },
  {
    title: "Listing",
    img: "../../images/Location.svg",
    isActive: false,
  },
  {
    title: "Users",
    img: "../../images/user.svg",
    isActive: false,
  },
  {
    title: "Account",
    img: "../../images/Wallet.svg",
    isActive: false,
  },
  {
    title: "Request",
    img: "../../images/request.svg",
    isActive: false,
  },
  {
    title: "Settings",
    img: "../../images/Setting.svg",
    isActive: false,
  },
];

function DashboardNav() {
  return (
    <Box>
      <Flex justifyContent="space-between" px="78px" gap="20px">
        <Flex gap="10px" height="67px" alignItems="center">
          {dashLinks.map((link, index) => (
            <Box key={index}>
              <DashboardLinks
                title={link.title}
                img={link.img}
                isActive={link.isActive}
              />
            </Box>
          ))}
        </Flex>
        <Flex position="relative" alignItems="center">
          <Input
            placeholder="Search... properties, customers here"
            width="319px"
            height="43px"
            bgColor="#F5F5F5"
            border="1px solid #E4E4E4"
            fontSize="0.75rem"
            color="#919191"
            pr="40px"
          />
          <Image
            src="../../images/Search.svg"
            alt="Search"
            width="24px"
            height="24px"
            position="absolute"
            right="0"
            mr="12px"
            zIndex="5"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default DashboardNav;
