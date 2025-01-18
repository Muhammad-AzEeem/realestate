import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export async function fetchApi(url) {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": "9db4609ba7msh433e905618d729ap1ff605jsn97f85514e635",
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  });

  return data;
}
