import { Note, NoteCard, useGetNotesQuery } from "@/entities/note";
import { SimpleGrid } from "@chakra-ui/react";

type NoteListProps = {
  notes: Note[];
};
export const NoteList = () => {
  const { data: notes } = useGetNotesQuery();

  return (
    <SimpleGrid
      columns={{ lg: 3, md: 2, sm: 1, base: 1 }}
      spacingX={{ lg: "40px", md: "60px", sm: "0px", base: "0px" }}
      spacingY={{ lg: "80px", md: "30px", sm: "20px", base: "20px" }}
    >
      {notes?.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </SimpleGrid>
  );
};
