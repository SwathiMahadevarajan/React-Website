import useApi from "api/client/useApi";
import { baseURL } from ".";

export default function useGetCustomerRating() {
  return useApi({
    baseURL,
    endpoint: "/customerRating",
    options: { method: "get" },
  });
}
