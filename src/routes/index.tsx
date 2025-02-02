import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col justify-center align-middle items-center h-screen">
      <h1 className="font-bold">Home</h1>
      <Button>ShadCN Button</Button>
    </div>
  );
}
