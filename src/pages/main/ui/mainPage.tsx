import { NoteCard } from "@/entities/note";
import { NoteList } from "@/widgets/noteList";
import { Box, Text } from "@chakra-ui/react";

export const MainPage = () => {
  return (
    <Box
      p={"80px 40px 237px 40px"}
      borderRadius={{
        lg: "80px 80px 0px 0px",
        md: "80px 80px 0px 0px",
        sm: "30px 30px 0 0",
        base: "30px 30px 0 0",
      }}
      bg={"#F6F6F6"}
      h={"100vh - 70px"}
    >
      <Box>
        <Text
          fontSize={{ lg: "112px", md: "72px", sm: "42px" }}
          fontWeight={"700"}
          lineHeight={"line-height: 90%"}
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
      <NoteList />
    </Box>
  );
};
