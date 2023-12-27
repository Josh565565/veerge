import { Box, Flex, Text, Image } from "@chakra-ui/react";

function PropertyCustomersOverview() {
  return (
    <Box>
      <Box
        w="407px"
        h="157px"
        p="20px"
        border="1px solid"
        rounded="12px"
        mr="78px"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap="8px">
            <Image
              src="../../images/property-icon.svg"
              alt="Property"
              width="24px"
              height="24px"
            />
            <Text color="#3D3D3D" fontSize="sm" fontWeight="bold">
              Property Overview
            </Text>
          </Flex>
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
        <Flex mt="30px" px="33px" justifyContent="space-between">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text color="191919" fontSize="1.5rem">
              0
            </Text>
            <Text color="#606060" fontSize="sm">
              Total
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text color="191919" fontSize="1.5rem">
              0
            </Text>
            <Text color="#606060" fontSize="sm">
              Available
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text color="191919" fontSize="1.5rem">
              0
            </Text>
            <Text color="#606060" fontSize="sm">
              Sold Out
            </Text>
          </Box>
        </Flex>
      </Box>
      {/*  */}
      <Box
        w="407px"
        h="157px"
        p="20px"
        border="1px solid"
        rounded="12px"
        mr="78px"
        mt="10px"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap="8px">
            <Image
              src="../../images/pro.svg"
              alt="Property"
              width="24px"
              height="24px"
            />
            <Text color="#3D3D3D" fontSize="sm" fontWeight="bold">
              Customers Overview
            </Text>
          </Flex>
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
        <Flex mt="30px" px="33px" justifyContent="space-between">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text color="191919" fontSize="1.5rem">
              0
            </Text>
            <Text color="#606060" fontSize="sm">
              Total
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text color="191919" fontSize="1.5rem">
              0
            </Text>
            <Text color="#606060" fontSize="sm">
              New
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text color="191919" fontSize="1.5rem">
              0
            </Text>
            <Text color="#606060" fontSize="sm">
              Active
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text color="191919" fontSize="1.5rem">
              0
            </Text>
            <Text color="#606060" fontSize="sm">
              Inactive
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default PropertyCustomersOverview;
