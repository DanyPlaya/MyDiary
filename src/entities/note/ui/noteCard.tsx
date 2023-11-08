import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@chakra-ui/react";
import CalendarIcon from "@/shared/assets/СalendarIcon.svg?url";
import TimerIcon from "@/shared/assets/TimerIcon.svg?url";
import { Note } from "../types/types";
type NoteCardProps = {
  note: Note;
  onOpen: () => void;
};
export const NoteCard = (props: NoteCardProps) => {
  const { note, onOpen } = props;
  return (
    <Card
      onClick={onOpen}
      p={{
        lg: "70px 40px 70px 30px",
        md: "50px 30px 40px 30px",
        sm: "34px 14px 50px 10px",
      }}
      w={{ lg: "587px", md: "480px", sm: "355px" }}
      h={{ lg: "560px", md: "530px", sm: "520px" }}
      _hover={{ bg: "#050F28", color: "white" }}
      borderRadius={{ lg: "20px", md: "20px", sm: "10px", base: "10px" }}
    >
      <CardHeader
        fontWeight={"700"}
        fontSize={{ lg: "42px", md: "32px", sm: "26px" }}
      >
        {note.title}
      </CardHeader>
      <CardBody
        fontSize={"18px"}
        fontWeight={"400"}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
      >
        {note.body}
      </CardBody>
      <CardFooter display={"flex"} justifyContent={"space-between"}>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Image mr={"10px"} src={CalendarIcon} />
          <Box>{note.date}</Box>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Image mr={"10px"} src={TimerIcon} />
          <Box>{note.time}</Box>
        </Box>
      </CardFooter>
    </Card>
  );
};
