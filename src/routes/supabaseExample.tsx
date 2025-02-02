import { SupabaseExampleIndex } from "@/features/supabase-example/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/supabaseExample")({
  component: SupabaseExample,
});

function SupabaseExample() {
  return <SupabaseExampleIndex />;
}
