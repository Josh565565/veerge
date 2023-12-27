import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import Date from "./Date";
import Amount from "./Amount";

const date = [
  {
    title: "Jan",
  },
  {
    title: "Feb",
  },
  {
    title: "Mar",
  },
  {
    title: "Apr",
  },
  {
    title: "Feb",
  },
  {
    title: "May",
  },
  {
    title: "Jun",
  },
  {
    title: "Jul",
  },
  {
    title: "Aug",
  },
  {
    title: "Sep",
  },
];

function SalesOverview() {
  return (
    <Box
      // width="856px"
      width="70%"
      height="325px"
      boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
      rounded="16px"
      ml="78px"
    >
      <Box px="23px" pt="15px">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Text fontSize="1.25rem" fontWeight="semibold" color="#191919">
              Sales Overview
            </Text>
            <Text fontSize="0.75rem" color="#606060" mt="16px">
              Showing overview Jan 2022 - Sep 2022
            </Text>
          </Box>
          <Button
            border="1px solid #CBCBCB"
            variant="outline"
            width="177px"
            h="46px"
            fontSize="0.75rem"
            color="#CBCBCB"
          >
            View Transactions
          </Button>
        </Flex>
        <Flex alignItems="end" mt="5px" flexDir="column">
          <Flex width="264px" height="33px" gap="12px">
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="80px"
              height="33px"
              fontSize="sm"
            >
              1 Week
            </Text>
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="80px"
              height="33px"
              fontSize="sm"
            >
              1 Month
            </Text>
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="80px"
              height="33px"
              bg="#F5F5F5"
              fontSize="sm"
              rounded="8px"
              fontWeight="semibold"
            >
              1 Year
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box height="2px" bgColor="#E4E4E4" mt="6px"></Box>
      <Flex ml="23px" mt="10px" gap="10px">
        <Flex
          height="143px"
          width="408px"
          justifyContent="space-between"
          alignItems="center"
          //   border="1px solid"
        >
          <Image
            src="../../images/Left.svg"
            alt="Search"
            width="24px"
            height="24px"
          />
          <Flex
            alignItems="center"
            justifyContent="end"
            height="153px"
            width="50px"
            boxShadow="-4px 0px 12px 0px rgba(0, 0, 0, 0.04)"
          >
            <Image
              src="../../images/Right.svg"
              alt="Search"
              width="24px"
              height="24px"
            />
          </Flex>
        </Flex>
        <Flex gap="12px" pr="23px">
          <Box display="flex" flexDirection="column" gap="15px">
            <Amount
              amount="0.00"
              amountColor="#4545FE"
              img="../../images/Up-green.svg"
              percent="0"
              percentColor="#12D8A0"
            />

            <Amount
              amount="0.00"
              amountColor="#191919"
              img="../../images/Up-green.svg"
              percent="0"
              percentColor="#12D8A0"
            />
          </Box>
          <Box display="flex" flexDirection="column" gap="15px">
            <Amount
              amount="0.00"
              amountColor="#191919"
              img="../../images/Up-green.svg"
              percent="0"
              percentColor="#12D8A0"
            />

            <Amount
              amount="0.00"
              amountColor="#FF6A6A"
              img="../../images/Up-red(1).svg"
              percent="0"
              percentColor="#FF6A6A"
            />
          </Box>
        </Flex>
      </Flex>
      <Box ml="40px">
        <Box width="331px" height="1px" bgColor="#E4E4E4" mt="1px"></Box>
        <Flex gap="12px" mt="5px">
          {date.map((item, index) => (
            <Flex key={index}>
              <Date title={item.title} />
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default SalesOverview;
