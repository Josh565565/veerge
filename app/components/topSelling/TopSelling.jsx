import { Box, Text, Flex, Image } from "@chakra-ui/react";

function TopSelling() {
  return (
    <Box
      w="350px"
      h="287px"
      rounded="16px"
      boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
      p="20px"
      mt="20px"
      mr="83"
    >
      <Text color="#12D8A0" fontSize="1rem">
        Top Selling
      </Text>
      <Box mt="0px">
        <Text color="#191919" fontSize="1.75rem">
          ₦ 0.
          <Box as="span" color="#CBCBCB">
            00
          </Box>
        </Text>
        <Text color="#606060" fontSize="small">
          Total Sold
        </Text>
      </Box>
      <Flex mt="20px" gap="20px">
        <Flex
          alignItems="center"
          justifyContent="center"
          w="144px"
          h="155"
          bgColor="#F5F5F5"
          rounded="12px"
        >
          <Image
            src="../../images/img-big.svg"
            alt="Property"
            width="100px"
            height="100px"
          />
        </Flex>
        <Box>
          <Text color="#191919" fontSize="large">
            None
          </Text>
          <Text color="#CBCBCB" fontSize="1rem" mt="15px">
            0
          </Text>
          <Text color="#606060" fontSize="small">
            Whole units sold
          </Text>
          <Box>
            <Text color="#12D8A0" fontSize="1rem" mt="10px">
              0
            </Text>
            <Text color="#606060" fontSize="small">
              Fractions available
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default TopSelling;
