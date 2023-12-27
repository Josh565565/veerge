import { Flex, Text } from "@chakra-ui/react";

function Date({ title }) {
  return (
    <Flex justifyItems="center" alignItems="center" width="22px" height="13px">
      <Text fontSize="0.625rem" fontWeight="semibold" color="#919191">
        {title}
      </Text>
    </Flex>
  );
}

export default Date;
