import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { baseUrl, fetchApi } from "@/utils/fetchApi";
import Property from "@/Components/Property";

function Banner({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  imageUrl,
}) {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default async function Home() {
  const propertyForSaleResponse = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRentResponse = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  const propertyForSale = propertyForSaleResponse?.hits || [];
  const propertyForRent = propertyForRentResponse?.hits || [];

  return (
    <Box>
      <Banner
        purpose="Rent A Home"
        title1="Rental Homes For "
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes "
        desc2="And more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="Buy A Home"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes "
        desc2="And more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://images.bayut.com/thumbnails/737324960-800x600.webp"
      />
      <Flex flexWrap="wrap">
        {propertyForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}
