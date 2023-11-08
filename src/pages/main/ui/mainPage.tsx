import { Box, Text } from "@chakra-ui/react";

export const MainPage = () => {
  return (
    <Box
      p={"80px 40px 237px 40px"}
      borderRadius={{
        lg: "80px 40px 237px 40px",
        md: "80px 40px 237px 40px",
        sm: "30px 30px 0px 0px",
      }}
      bg={"#F6F6F6"}
      h={"100vh"}
    >
      <Text
        fontSize={{ lg: "112px", md: "72px", sm: "42px" }}
        fontWeight={"700"}
      >
        Мой
      </Text>
      <Text
        fontSize={{ lg: "112px", md: "72px", sm: "42px" }}
        fontWeight={"700"}
      >
        дневничок
      </Text>
    </Box>
  );
};
