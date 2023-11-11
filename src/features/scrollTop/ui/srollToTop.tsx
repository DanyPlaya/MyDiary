import React, { useState, useEffect } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import ArrowIcon from "@/shared/assets/ArrowIcon.svg?url";
export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 200;
    setIsVisible(scrollTop > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box position="fixed" bottom="4" right="4">
      {isVisible && (
        <Button
          p={" 24px 60px"}
          justifyContent={"space-between"}
          w={"238px"}
          h={"72px"}
          display={"flex"}
          borderRadius={"40px"}
          bg={"#88A1DE"}
          onClick={scrollToTop}
          colorScheme="teal"
          variant="solid"
        >
          <Image src={ArrowIcon} />
          <Text color={"#050F28"} fontSize={"18px"} fontWeight={"700"}>
            Наверх
          </Text>
        </Button>
      )}
    </Box>
  );
};
