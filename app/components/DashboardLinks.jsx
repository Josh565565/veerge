import { Flex, Image, Text } from "@chakra-ui/react";

function DashboardLinks({ title, img, isActive }) {
  const activeStyle = {
    color: isActive ? "#191919" : "#3D3D3D",
    fontWeight: isActive ? "semibold" : "regular",
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap="11px"
      width="148px"
      height="38px"
      style={activeStyle}
      fontSize="0.875rem"
    >
      <Image src={img} alt="Logo" />
      <Text>{title}</Text>
    </Flex>
  );
}

export default DashboardLinks;
