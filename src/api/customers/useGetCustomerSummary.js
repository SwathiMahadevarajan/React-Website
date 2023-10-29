import useApi from "api/client/useApi";
import { baseURL } from ".";
export default function useGetCustomerSummary() {
  return useApi({
    baseURL,
    endpoint: "/customerSummary/0",
    options: { method: "get" },
  });
}
