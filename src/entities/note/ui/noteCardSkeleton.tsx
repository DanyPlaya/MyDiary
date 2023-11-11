import TimerIcon from "@/shared/assets/TimerIcon.svg?url";
import CalendarIcon from "@/shared/assets/СalendarIcon.svg?url";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  SkeletonText,
} from "@chakra-ui/react";

export const NoteCardSkeleton = () => {
  return (
    <Card
      p={{
        base: "20px",
        sm: "34px 14px 50px 10px",
        md: "50px 30px 40px 30px",
        lg: "70px 40px 70px 30px",
      }}
      w={{ base: "100%", sm: "355px", md: "480px", lg: "587px" }}
      h={{ base: "auto", sm: "auto", md: "auto", lg: "auto" }} // изменено на "auto"
      _hover={{ bg: "#050F28", color: "white" }}
      borderRadius={{ base: "10px", sm: "10px", md: "20px", lg: "20px" }}
    >
      <CardHeader
        fontWeight="700"
        fontSize={{ base: "24px", sm: "26px", md: "32px", lg: "42px" }}
      >
        <SkeletonText />
      </CardHeader>
      <CardBody
        fontSize="18px"
        fontWeight="400"
        overflowY="auto"
        maxH={{ base: "auto", sm: "200px", md: "auto", lg: "auto" }}
      >
        <SkeletonText />
      </CardBody>
      <CardFooter display="flex" justifyContent="space-between">
        <Box justifyContent="space-between" display="flex">
          <Image mr="10px" src={CalendarIcon} />
          <Box>
            <SkeletonText />
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Image mr="10px" src={TimerIcon} />
          <Box>
            <SkeletonText />
          </Box>
        </Box>
      </CardFooter>
    </Card>
  );
};
