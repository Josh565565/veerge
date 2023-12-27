import { Box, Flex, Text, Image } from "@chakra-ui/react";

function Items({ bColor, title }) {
  return (
    <Box>
      <Text color="#191919" fontSize="0.625rem">
        {title}
      </Text>
      <Box w="205" h="0.5px" bgColor="#E4E4E4" pt="2px" mt="4px"></Box>
      <Flex mt="10px" alignItems="center" gap="15px">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="67px"
          h="68px"
          rounded="12px"
          borderColor={bColor}
          borderWidth="1px"
        >
          <Image
            src="../../images/img-small.svg"
            alt="Search"
            width="36px"
            height="36px"
          />
        </Box>
        <Text color="#191919" fontSize="1rem">
          None
        </Text>
      </Flex>
    </Box>
  );
}

export default Items;
