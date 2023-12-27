import { Box, Flex, Image, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box py="30px">
      <Flex alignItems="center" justifyContent="center" gap="10px">
        <Image src="../../images/lock.svg" alt="Logo" />
        <Text>End-to-end encryption</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
