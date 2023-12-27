import { Box, Flex, Text } from "@chakra-ui/react";
import Items from "./Items";

function ListingOverview() {
  return (
    <Box
      w="475px"
      h="287px"
      ml="83px"
      rounded="12px"
      boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
      mt="20px"
      p="15px"
    >
      <Text>Listing Overview</Text>
      <Flex justifyContent="space-between" mt="10px">
        <Box w="206px">
          <Items title="Most viewed" bColor="#12D8A0" />
        </Box>
        <Box w="206px">
          <Items title="Most Shared" bColor="#4545FE" />
        </Box>
      </Flex>

      <Flex
        justifyContent="space-between"
        mt="20px"
        alignItems="center"
        px="13px"
        gap="10px"
      >
        <Box w="206px">
          <Items title="Most watchlisted" bColor="#FF9103" />
        </Box>
        <Flex
          w="206px"
          h="68px"
          p="5px"
          px="15px"
          justifyContent="space-between"
          border="1px solid #E4E4E4"
          rounded="12px"
        >
          <Box>
            <Text color="#191919" fontSize="1.5rem">
              0
            </Text>
            <Text
              color="#3D3D3D"
              fontSize="0.625rem"
              fontWeight="bold"
              pt="0px"
            >
              Number of watchlists
            </Text>
          </Box>
          <img
            src="../../images/Bookmark.svg"
            alt=""
            width="24px"
            height="24px"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default ListingOverview;
