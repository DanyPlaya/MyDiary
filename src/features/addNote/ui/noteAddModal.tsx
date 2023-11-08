import { Modal } from "@chakra-ui/react";
type NoteAddModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const NoteAddModal = (props: NoteAddModalProps) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </Modal>
  );
};