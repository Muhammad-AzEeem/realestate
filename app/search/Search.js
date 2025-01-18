"use client";
import { useState } from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "@/Components/SearchFilters";
import Property from "@/Components/Property";
import Image from "next/image";
import noresult from "@/public/noresult.svg";

const Search = ({ properties, purposed }) => {
  const [searchFilters, setSearchFilters] = useState(false);

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}

      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {purposed}
      </Text>

      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image src={noresult} alt="No result found" />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;
