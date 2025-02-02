import { ReactQueryExampleRoot } from "@/features/react-query-example/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reactQueryExample")({
  component: ReactQueryExample,
});

function ReactQueryExample() {
  return <ReactQueryExampleRoot />;
}
