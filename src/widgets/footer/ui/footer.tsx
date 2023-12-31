import { ScrollToTopButton } from "@/features/scrollTop";
import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box w={"full"} p={"25px 40px 25px 40px"} bg={"#050F28"} h={"70px"}>
      <Text
        color={"white"}
        fontSize={"18px"}
        fontWeight={"400"}
        letterSpacing={"0.72px"}
      >
        Мой дневничок
      </Text>
      <ScrollToTopButton />
    </Box>
  );
};
