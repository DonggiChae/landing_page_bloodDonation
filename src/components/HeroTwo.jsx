import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcSearch, FcDonate, FcLock } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={"1.5rem"}>
        {title}
      </Text>
      <Text>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={60}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcSearch} w={10} h={10} />}
          title={"쉬운 증명"}
          text={"블록체인상에 기록되어 소유를 증명하기 쉬워집니다. "}
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"간편한 양도"}
          text={"주소만 알고 있으면 간편하게 양도 가능합니다."}
        />
        <Feature
          icon={<Icon as={FcLock} w={10} h={10} />}
          title={"안전한 보관"}
          text={"종이 헌혈증에 비해 낮은 분실률"}
        />
      </SimpleGrid>
    </Box>
  );
}
