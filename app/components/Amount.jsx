import { Box, Text, Flex, Image } from "@chakra-ui/react";

function Amount({ amount, amountColor, img, percent, percentColor }) {
  return (
    <Box>
      <Box
        width="210px"
        h="73px"
        rounded="12px"
        border="1px solid #E4E4E4"
        pt="8px"
        pl="10px"
      >
        <Text fontSize="lg" fontWeight="600" color={amountColor}>
          ₦ {amount}
        </Text>
        <Flex gap="14px" mt="10px">
          <Text color="#3D3D3D" fontSize="0.625rem" fontWeight="500">
            Balance
          </Text>
          <Flex gap="4px">
            <Image src={img} alt="" width="14px" height="14px" />
            <Text fontSize="0.625rem" fontWeight="500" color={percentColor}>
              {percent}%
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Amount;
