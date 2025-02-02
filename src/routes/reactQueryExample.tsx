import { ReactQueryExampleRoot } from "@/components/pages/react-query-example";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reactQueryExample")({
  component: ReactQueryExample,
});

function ReactQueryExample() {
  return <ReactQueryExampleRoot />;
}
