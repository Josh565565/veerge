import { Box, Flex, Text, Image } from "@chakra-ui/react";

function VeergeAssistant() {
  return (
    <Box pos={"fixed"} bottom={0} right={0} mr="15px" mb="20px">
      <Flex
        alignItems="center"
        justifyContent="center"
        gap="5px"
        w="212px"
        h="46px"
        rounded="70px"
        //   mr="15px"
        //   mt="-120px"
        bgColor="#4545FE"
        //   zIndex={100}
      >
        <Image src="../../images/bulb.svg" alt="Bulb" />
        <Text color="#FFFFFF" fontSize="large">
          Veerge Assistant
        </Text>
        <Image src="../../images/cross-circle.svg" alt="Logo" />
      </Flex>
    </Box>
  );
}

export default VeergeAssistant;
