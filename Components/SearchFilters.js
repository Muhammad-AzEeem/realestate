import { useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Spinner,
  Button,
  Input,
  Icon,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation"; // Updated router import
import { filterData, getFilterValues } from "@/utils/filterData"; // Use alias-based paths
import Image from "next/image";

export default function SearchFilters() {
  const [filters] = useState(filterData);
  const [showLocations, setShowLocations] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const existingQuery = new URLSearchParams(window.location.search); // Safely handle query params

    // Adding filter values to the query params
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value) {
        existingQuery.set(item.name, item.value); // Safely add or update query parameters
      }
    });

    const newPathname = `${
      window.location.pathname
    }?${existingQuery.toString()}`;

    router.push(newPathname);
  };

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}

      <Flex flexDir="column">
        <Button
          onClick={() => setShowLocations(!showLocations)}
          border="1px"
          borderColor="gray.200"
          marginTop="2"
        >
          Search Location
        </Button>
        {showLocations && (
          <Flex flexDir="column" pos="relative" paddingTop="2">
            <Input
              placeholder="Type Here"
              value={searchTerm}
              w="300px"
              focusBorderColor="gray.300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== "" && (
              <Icon
                as={MdCancel}
                pos="absolute"
                cursor="pointer"
                right="5"
                top="5"
                zIndex="100"
                onClick={() => setSearchTerm("")}
              />
            )}
            {loading && <Spinner margin="auto" marginTop="3" />}
            {showLocations && (
              <Box height="300px" overflow="auto">
                {locationData?.map((location) => (
                  <Box
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}
                  >
                    <Text
                      cursor="pointer"
                      bg="gray.200"
                      p="2"
                      borderBottom="1px"
                      borderColor="gray.100"
                    >
                      {location.name}
                    </Text>
                  </Box>
                ))}
                {!loading && !locationData?.length && (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                    marginTop="5"
                    marginBottom="5"
                  >
                    <Image src={noresult} alt="" />
                    <Text fontSize="xl" marginTop="3">
                      Waiting to search!
                    </Text>
                  </Flex>
                )}
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
