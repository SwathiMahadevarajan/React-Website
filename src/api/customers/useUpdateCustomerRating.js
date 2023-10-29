import useApi from "api/client/useApi";
import { baseURL } from ".";
export default function useUpdateCustRating() {
  let options = {};
  options.method = "post";
  return useApi({ baseURL, endpoint: "/customerRating", options });
}
