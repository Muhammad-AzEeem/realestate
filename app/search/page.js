import Search from "./Search";
import { baseUrl, fetchApi } from "@/utils/fetchApi";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const purposed = params?.purpose || "";

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
  } = params || {};

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  const properties = data?.hits || [];

  return (
    <div>
      <Search purposed={purposed} properties={properties} />
    </div>
  );
}
