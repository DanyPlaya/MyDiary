import { NoteCard } from "@/entities/note";
import { SortNotes } from "@/features/sortNote/inex";
import { NoteList } from "@/widgets/noteList";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";

export const MainPage = () => {
  const [isSmallerThan375] = useMediaQuery("(max-width: 376px)");
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
      {isSmallerThan375 ? (
        <Box>
          <Text fontSize={"38px"} fontWeight={"700"}>
            Мой дневничок
          </Text>
          <SortNotes />
        </Box>
      ) : (
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
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

          <Box>
            <SortNotes />
          </Box>
        </Box>
      )}
      <NoteList />
    </Box>
  );
};
