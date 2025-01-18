import { baseUrl, fetchApi } from "@/utils/fetchApi"; // Apne fetchApi utility ko import karein
import Search from "@/app/search/Search";

export default async function PropertiesPage({ searchParams }) {
  const {
    purpose = "for-rent",
    rentFrequency = "yearly",
    minPrice = "0",
    maxPrice = "1000000",
    roomsMin = "0",
    bathsMin = "0",
    sort = "price-desc",
    areaMax = "35000",
    locationExternalIDs = "5002",
    categoryExternalID = "4",
  } = searchParams || {};

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  const properties = data?.hits || [];

  return (
    <>
      <Search properties={properties} />
    </>
  );
}
