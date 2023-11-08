import Logo from "@/shared/assets/Logo.svg?url";
import { Box, Button, Image, Text } from "@chakra-ui/react";
export const Header = () => {
  return (
    <Box
      px={{ lg: "40px", md: "20px", sm: "10px" }}
      py={{ lg: "28px 33px", md: "14px 26px", sm: "13px" }}
      h={{ lg: "172px", md: "118px", sm: "71px" }}
      bg={"white"}
      width={"full"}
      as="header"
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          w={{ lg: "448px", md: "312px", sm: "186px" }}
          h={{ lg: "110px", md: "76px", sm: "45px" }}
        >
          <Image src={Logo} />
        </Box>
        <Box>
          <Button
            color="white"
            borderRadius={"65px"}
            w={{ lg: "350px", md: "350px" }}
            h={{ lg: "97px", md: "97px" }}
            bg={"#050F28"}
            _hover={{ bg: "#88A1DE" }}
          >
            <Text fontWeight={"700"} fontSize={"18px"}>
              Написать
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
