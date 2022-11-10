import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { forwardRef } from "react";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"}>{title}</StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

const Statistics = forwardRef((props, ref) => {
  return (
    <Box
      maxW="7xl"
      mx={"auto"}
      pt={28}
      pb={48}
      px={{ base: 2, sm: 12, md: 17 }}
      ref={ref}
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        우리 회사는
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"생각합니다."} stat={"사람을 위해"} />
        <StatsCard title={"노력합니다."} stat={"성장을 위해"} />
        <StatsCard title={"행동합니다."} stat={"세상을 바꾸기 위해"} />
      </SimpleGrid>
    </Box>
  );
});

export default Statistics;
