import { HomeIndex } from "@/features/home/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <HomeIndex />;
}
