import Logo from "@/shared/assets/Logo.svg?url";
import { Box, Image } from "@chakra-ui/react";
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
        w={{ lg: "448px", md: "312px", sm: "186px" }}
        h={{ lg: "110px", md: "76px", sm: "45px" }}
      >
        <Image src={Logo} />
      </Box>
    </Box>
  );
};
