import { NoteCardSkeleton } from "@/entities/note";
import { Grid } from "@chakra-ui/react";

export const NoteListSkeleton = () => {
  const skeletonArray = Array.from({ length: 9 }, (_, index) => index);

  return (
    <Grid
      templateColumns={{
        lg: "repeat(3, 1fr)",
        md: "repeat(2, 1fr)",
        sm: "1fr",
        base: "1fr",
      }}
      gap={{
        lg: "40px",
        md: "60px",
        sm: "0px",
        base: "0px",
      }}
      mt={{
        lg: "80px",
        md: "30px",
        sm: "20px",
        base: "20px",
      }}
    >
      {skeletonArray?.map((index) => (
        <NoteCardSkeleton key={index} />
      ))}
    </Grid>
  );
};
