import {
  Box,
  Container,
  Image,
  Text,
  Flex,
  Thead,
  Tr,
  Th,
  Table,
  Tbody,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Container
      h="827px"
      w="400px"
      bg="#0D0D0D"
      p="0"
      boxShadow="2.914px 2.914px 5.829px 0px rgba(123, 157, 157, 0.15), -2.914px -2.914px 5.829px 0px rgba(123, 157, 157, 0.15)"
    >
      <Flex
        justifyContent="space-between"
        h="50px"
        bgColor="#171717"
        alignItems="center"
        px="24px"
      >
        <Text color="#FFFFFF">Calender</Text>
        <Image
          src="../../images/close.svg"
          alt="Close"
          width="24px"
          height="24px"
        />
      </Flex>
      <Flex h="67px" gap="30px" justifyContent="center" alignItems="center">
        <Image
          src="../../images/arrow-left.svg"
          alt="Close"
          width="24px"
          height="24px"
        />
        <Text color="#FFFFFF" fontSize="1rem">
          November 2023
        </Text>
        <Image
          src="../../images/arrow-right.svg"
          alt="Close"
          width="24px"
          height="24px"
        />
      </Flex>
      {/* Table for canlender start */}
      <Box px="24px">
        <Table
          variant="unstyled"
          color="#969696"
          px="24px"
          border="1px solid #121212"
          size="400px"
          rounded=""
        >
          <Thead px="24px">
            <Tr fontSize="0.47375rem" fontWeight="500" border="1px solid">
              <Th height="20px" width="50px" border="1px solid #121212">
                SUN
              </Th>
              <Th
                height="20px"
                width="50px"
                border="1px solid #121212"
                pl="4px"
              >
                MON
              </Th>
              <Th
                height="20px"
                width="50px"
                border="1px solid #121212"
                pl="4px"
              >
                TUE
              </Th>
              <Th
                height="20px"
                width="50px"
                border="1px solid #121212"
                pl="4px"
              >
                WED
              </Th>
              <Th
                height="20px"
                width="50px"
                border="1px solid #121212"
                pl="4px"
              >
                THURS
              </Th>
              <Th
                height="20px"
                width="50px"
                border="1px solid #121212"
                pl="4px"
              >
                FRI
              </Th>
              <Th
                height="20px"
                width="50px"
                border="1px solid #121212"
                pl="4px"
              >
                SAT
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              height="91px"
              color="#969696"
              fontSize="0.47375rem"
              fontWeight="500"
            >
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                29
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                30
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                31
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                Nov 1
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                2
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                3
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                4
              </Td>
            </Tr>
            {/*  */}
            <Tr
              height="91px"
              color="#969696"
              fontSize="0.47375rem"
              fontWeight="500"
            >
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                5
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                6
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                7
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                8
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                9
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                10
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                11
              </Td>
            </Tr>
            <Tr
              height="91px"
              color="#969696"
              fontSize="0.47375rem"
              fontWeight="500"
            >
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                12
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                13
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                14
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                15
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                <Flex
                  w="15.68px"
                  h="10.68px"
                  rounded="200px"
                  bgColor="#2525E6"
                  alignItems="center"
                  justifyContent="center"
                >
                  16
                </Flex>
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                17
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                18
              </Td>
            </Tr>
            <Tr
              height="91px"
              color="#969696"
              fontSize="0.47375rem"
              fontWeight="500"
            >
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                19
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                20
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                21
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                22
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                23
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                24
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                25
              </Td>
            </Tr>
            <Tr
              height="91px"
              color="#969696"
              fontSize="0.47375rem"
              fontWeight="500"
            >
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                26
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                27
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                28
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                29
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                30
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                31
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                DEC 1
              </Td>
            </Tr>
            <Tr
              height="91px"
              color="#969696"
              fontSize="0.47375rem"
              fontWeight="500"
            >
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                2
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                3
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                4
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                5
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                6
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                7
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                8
              </Td>
            </Tr>
            <Tr
              height="91px"
              color="#969696"
              fontSize="0.47375rem"
              fontWeight="500"
            >
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                9
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                10
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                11
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                12
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                13
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                14
              </Td>
              <Td
                width="50px"
                border="1px solid #121212"
                pl="4px"
                mt="5px"
                verticalAlign="top"
              >
                15
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      {/* Table for canlender end */}
    </Container>
  );
}
