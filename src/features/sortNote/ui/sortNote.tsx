import { Box, Button, Image, Text } from "@chakra-ui/react";
import SortDesc from "@/shared/assets/SortMode.svg?url";
import SortAsc from "@/shared/assets/SortModeAsc.svg?url";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { noteActions } from "@/entities/note";
export const SortNotes = () => {
  const dispatch = useAppDispatch();
  return (
    <Box display={"flex"}>
      <Button
        onClick={() => dispatch(noteActions.setSortMode("desc"))}
        mr={"10px"}
        bg={"#88A1DE"}
        w={{ lg: "192px", md: "192px", sm: "164px", base: "164px" }}
        h={{ lg: "64px", md: "64px", sm: "30px", base: "30px" }}
        p={"40px"}
        borderRadius={"40px"}
        display={"flex"}
      >
        <Image src={SortDesc} />
        <Text fontSize={"16px"} fontWeight={"700"}>
          Сначала новые
        </Text>
      </Button>
      <Button
        onClick={() => dispatch(noteActions.setSortMode("asc"))}
        bg={"#88A1DE"}
        w={"192px"}
        h={"64px"}
        p={"40px"}
        borderRadius={"40px"}
        display={"flex"}
      >
        <Image src={SortAsc} />
        <Text fontSize={"16px"} fontWeight={"700"}>
          Сначала старые
        </Text>
      </Button>
    </Box>
  );
};
