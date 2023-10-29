import useApi from "api/client/useApi";

export default function useSetStatus({ lessonId, chapterId }) {
  let options = {};
  options.method = "put";
  return useApi({ endpoint: `/${lessonId}/${chapterId}`, options });
}
