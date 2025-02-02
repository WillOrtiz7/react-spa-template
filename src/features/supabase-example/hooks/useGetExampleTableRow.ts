import { useQuery } from "@tanstack/react-query";
import { getExampleTableRow } from "../api/getExampleTableRow";

export function useGetExampleTableRow() {
  return useQuery({
    queryKey: ["getExampleTableRow"],
    queryFn: () => getExampleTableRow(),
  });
}
