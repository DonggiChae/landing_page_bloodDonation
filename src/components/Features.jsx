import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

export default function StatsGridWithImage() {
  return (
    <Box bg={"white"} position={"relative"} color={"black"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      ></Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"black"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"black"}
              >
                Technology
              </Text>
              <Heading
                color={"pink.400"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                블록체인 기술
              </Heading>
              <Text fontSize={"xl"} color={"black"}>
                블록체인은 블록들이 체인 형태로 연결되어 이루어진 하나의
                데이터베이스입니다.
                <br />
                비즈니스 네트워크에서 트랜잭션을 기록하고 자산을 추적하는
                프로세스를 용이하게 하는 공유 불변 원장입니다. 사실상 가치를
                지닌 모든 것을 블록체인 네트워크에서 추적하고 거래할 수 있으며,
                모든 관련 사항에 대한 리스크를 줄이고 비용을 절감합니다.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontSize={"3xl"} color={"pink.500"} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"black"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"black"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "투명성",
    content: (
      <>
        블록체인의 정보는 모든 참여자가 볼 수 있으며 변경이 불가능합니다. 따라서
        리스크 및 사기 행위가 감소하고 신뢰성이 구축됩니다.
      </>
    ),
  },
  {
    title: "보안 강화",
    content: (
      <>
        반드시 모든 네트워크 구성원이 데이터 정확성에 대해 합의해야 하며, 모든
        검증된 트랜잭션은 영구적으로 기록되어 변경할 수 없습니다. 시스템
        관리자를 비롯한 어느 누구도 트랜잭션을 삭제할 수 없습니다.
      </>
    ),
  },
  {
    title: "효율 향상",
    content: (
      <>
        네트워크 구성원 간 공유하는 분산 원장을 이용하면, 기록 조정으로 시간을
        낭비할 일이 없습니다. 트랜잭션을 가속화하기 위해 스마트 계약이라 불리는
        일련의 규칙을 블록체인에 저장하고, 자동으로 실행할 수 있습니다.
      </>
    ),
  },
  {
    title: "추적 가능성",
    content: (
      <>
        블록체인 데이터는 변경이 불가능하기 때문에 복잡한 공급망 내에서 품목이나
        출처를 추적하기에 적합합니다.
      </>
    ),
  },
];
