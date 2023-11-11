import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NoteAddSchema, schemaNote } from "../model/schemaForm";
import { useAddNoteMutation } from "@/entities/note";

type NoteAddModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const NoteAddModal = (props: NoteAddModalProps) => {
  const { isOpen, onClose } = props;
  const [sendRequest] = useAddNoteMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteAddSchema>({ resolver: zodResolver(schemaNote) });
  const onSubmit: SubmitHandler<NoteAddSchema> = (data) => {
    sendRequest(data);
    onClose();
  };
  return (
    <Modal
      size={{ lg: "6xl", md: "xl", sm: "sm" }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent
          borderRadius={{ lg: "40px", md: "40px", sm: "0px", base: "0px" }}
          p={"45px 45px 53px 60px"}
        >
          <ModalHeader>
            <Text
              fontSize={{ lg: "42px", md: "42px", sm: "32px", base: "32px" }}
              fontWeight={"700"}
            >
              Новая запись
            </Text>
            <ModalCloseButton mr={"45px"} mt={"45px"} fontSize={"25px"} />
          </ModalHeader>

          <ModalBody>
            <Box display={{ lg: "flex" }}>
              <FormControl
                isInvalid={!!errors.title}
                mb={{ md: "45px" }}
                mr={{ lg: "42px" }}
              >
                <FormLabel>Заголовок</FormLabel>
                <Input maxLength={200} type="text" {...register("title")} />
                <FormErrorMessage>
                  {!!errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.datetime} mb={{ md: "45px" }}>
                <FormLabel>Дата</FormLabel>
                <Input type="datetime-local" {...register("datetime")} />
                <FormErrorMessage>
                  {!!errors.datetime && errors.datetime.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <FormControl isInvalid={!!errors.body}>
              <FormLabel>Заметка</FormLabel>
              <Textarea
                maxLength={2000}
                h={"166px"}
                resize={"none"}
                {...register("body")}
              />
              <FormErrorMessage>
                {!!errors.body && errors.body.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"start"}>
            <Button
              h={"70px"}
              w={"300px"}
              color={"white"}
              borderRadius={"65px"}
              bg={"#050F28"}
              type="submit"
            >
              Поделиться наболевшим
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};
