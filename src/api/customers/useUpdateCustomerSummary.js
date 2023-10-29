import useApi from "api/client/useApi";
import { baseURL } from ".";
export default function useUpdateCustSummary() {
  let options = {};
  //   options.payload = { summary: summary };
  options.method = "put";
  return useApi({ baseURL, endpoint: "/customerSummary/0", options });
}
