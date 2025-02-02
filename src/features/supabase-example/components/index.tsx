import { useGetExampleTableRow } from "../hooks/useGetExampleTableRow";

export function SupabaseExampleIndex() {
  const { data, error, isPending } = useGetExampleTableRow();
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen align-middle">
      {JSON.stringify(data)}
    </div>
  );
}
