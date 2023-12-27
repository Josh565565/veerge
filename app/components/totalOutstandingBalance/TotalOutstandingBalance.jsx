import { Box, Flex, Text, Image } from "@chakra-ui/react";

function TotalOutstandingBalance() {
  return (
    <Box
      border="1px solid"
      rounded="12px"
      w="418px"
      h="287px"
      p="20px"
      mt="20px"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Text color="#191919" fontSize="1.75rem">
            ₦ 0.
            <Box as="span" color="#CBCBCB">
              00
            </Box>
          </Text>
          <Text color="#606060" fontSize="sm">
            Total Outstanding Balance
          </Text>
        </Box>
        <Flex>
          <Text color="#CBCBCB" fontSize="xs" fontWeight="bold">
            View all
          </Text>
          <Image
            src="../../images/view-all-arrow.svg"
            alt="Property"
            width="18px"
            height="18px"
          />
        </Flex>
      </Flex>
      <Flex mt="25px" gap="20px">
        <Flex
          alignItems="center"
          justifyContent="center"
          w="154px"
          h="155"
          bgColor="#F5F5F5"
          rounded="12px"
        >
          <Image
            src="../../images/img-big.svg"
            alt="Property"
            // width="18px"
            // height="18px"
          />
        </Flex>
        <Box>
          <Text color="#191919" fontSize="large">
            None
          </Text>
          <Text color="#FF6A6A" fontSize="small" mt="40px">
            ₦ 0.00
          </Text>
          <Text color="#606060" fontSize="x-small">
            Outstanding Balance
          </Text>
          <Flex alignItems="center" mt="25px" gap="10px" ml="50px">
            <Text color="#606060" fontSize="small">
              1/5
            </Text>
            <Flex gap="10px">
              <Image
                src="../../images/Left.svg"
                alt="Property"
                width="32px"
                height="32px"
              />
              <Image
                src="../../images/Right.svg"
                alt="Property"
                width="32px"
                height="32px"
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default TotalOutstandingBalance;
