import useApi from "api/client/useApi";

export default function useGetStatus({ lessonId }) {
  return useApi({ endpoint: `/${lessonId}`, options: { method: "get" } });
}
