"use client";
import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="absolute"
      left="25%" // Adjusted for closeness
      top="24%"
      transform="translateY(-50%)"
      zIndex="10"
    >
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="3xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="absolute"
      right="25%" // Adjusted for closeness
      top="24%"
      transform="translateY(-50%)"
      zIndex="10"
    >
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="3xl"
        cursor="pointer"
      />
    </Flex>
  );
};

export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
      scrollContainerClassName="custom-scroll-container"
    >
      {data.map((item) => (
        <Box
          key={item.id}
          display="inline-block"
          className="scroll-item"
          width="910px"
          overflow="hidden"
          p="1"
        >
          <Image
            alt="property"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
