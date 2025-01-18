import { baseUrl, fetchApi } from "@/utils/fetchApi";
import PropertyPage from "../PropertyPage";

export default async function page({ params }) {
  const { id } = await params;
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  const propertyDetails = data;

  return (
    <div>
      <PropertyPage propertyDetails={propertyDetails} />
    </div>
  );
}
