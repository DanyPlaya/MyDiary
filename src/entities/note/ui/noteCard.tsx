import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import CalendarIcon from "@/shared/assets/СalendarIcon.svg?url";
import TimerIcon from "@/shared/assets/TimerIcon.svg?url";
import { Note } from "../types/types";
import { DeleteIcon } from "@chakra-ui/icons";

type NoteCardProps = {
  note: Note;
  onOpen?: () => void;
  onClick: (id: number) => void;
};

export const NoteCard = (props: NoteCardProps) => {
  const toast = useToast();
  const { note, onOpen, onClick } = props;
  const date = note?.datetime?.split("T")[0];
  const time = note?.datetime?.split("T")[1]?.substring(0, 5);
  const handleButtonClick = () => {
    onClick(note.id);
    toast({
      title: "Заметка удалена",
      description: "Вы успешно удалили заметку!",
      status: "success",
      colorScheme: "blue",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <Card
      onClick={onOpen}
      p={{
        base: "20px",
        sm: "34px 14px 50px 10px",
        md: "50px 30px 40px 30px",
        lg: "70px 40px 70px 30px",
      }}
      w={{ base: "100%", sm: "355px", md: "480px", lg: "587px" }}
      h={{ base: "auto", sm: "520px", md: "530px", lg: "560px" }}
      _hover={{ bg: "#050F28", color: "white" }}
      borderRadius={{ base: "10px", sm: "10px", md: "20px", lg: "20px" }}
      overflow="hidden"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#CBD5E0",
          borderRadius: "24px",
        },
      }}
    >
      <CardHeader
        fontWeight="700"
        fontSize={{ base: "24px", sm: "26px", md: "32px", lg: "42px" }}
      >
        {note.title}
      </CardHeader>
      <CardBody
        fontSize="18px"
        fontWeight="400"
        overflowY="auto"
        maxH={{ base: "auto", sm: "200px", md: "auto", lg: "auto" }}
      >
        {note.body}
      </CardBody>
      <CardFooter display="flex" justifyContent="space-between">
        <Box justifyContent="space-between" display="flex">
          <Image mr="10px" src={CalendarIcon} />
          <Box>{date}</Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Image mr="10px" src={TimerIcon} />
          <Box>{time}</Box>
        </Box>
      </CardFooter>
      <Button
        onClick={handleButtonClick}
        p={" 24px 120px"}
        display={"flex"}
        justifyContent={"space-between"}
        borderRadius={"40px"}
        bg={"#88A1DE"}
        colorScheme="whiteAlpha"
        variant="solid"
      >
        <DeleteIcon />
        <Text color={"#050F28"} fontSize={"18px"} fontWeight={"700"}>
          Удалить заметку
        </Text>
      </Button>
    </Card>
  );
};
