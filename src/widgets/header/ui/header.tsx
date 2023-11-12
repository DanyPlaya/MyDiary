import { NoteAddModal } from "@/features/addNote";
import Logo from "@/shared/assets/Logo.svg?url";
import MobileIcon from "@/shared/assets/MobileAdd.svg?url";
import {
  Box,
  Button,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLargerThan375] = useMediaQuery("(max-width: 376px)");
  console.log(isLargerThan375);
  const toast = useToast();
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
          <Link to={"/"}>
            <Image
              w={{ lg: "448px", md: "312px", sm: "186px", base: "186px" }}
              h={{ lg: "110px", md: "76px", sm: "45px", base: "186px" }}
              src={Logo}
            />
          </Link>
        </Box>
        {isLargerThan375 ? (
          <Button
            onClick={onOpen}
            w={"66px"}
            h={"66px"}
            bg={"#050F28"}
            borderRadius={"50%"}
          >
            <Image src={MobileIcon} />
          </Button>
        ) : (
          <Box>
            <Button
              onClick={onOpen}
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
        )}
        <NoteAddModal toast={toast} isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
};
