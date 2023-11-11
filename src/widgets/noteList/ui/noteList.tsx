import {
  Note,
  NoteCard,
  selectSortMode,
  useGetNotesQuery,
  useSortNotesQuery,
} from "@/entities/note";
import { SimpleGrid } from "@chakra-ui/react";
import { NoteListSkeleton } from "./noteListSkeleton";
import { useSelector } from "react-redux";

type NoteListProps = {
  notes: Note[];
};
export const NoteList = () => {
  const sortMode = useSelector(selectSortMode);
  const { data: notes, isLoading } = useSortNotesQuery(sortMode);
  console.log(notes);
  if (isLoading) <NoteListSkeleton />;
  return (
    <SimpleGrid
      columns={{ lg: 3, md: 2, sm: 1, base: 1 }}
      spacingX={{ lg: "40px", md: "60px", sm: "0px", base: "0px" }}
      spacingY={{ lg: "80px", md: "30px", sm: "20px", base: "20px" }}
    >
      {notes ? (
        notes?.map((note) => <NoteCard key={note.id} note={note} />)
      ) : (
        <NoteListSkeleton />
      )}
    </SimpleGrid>
  );
};
