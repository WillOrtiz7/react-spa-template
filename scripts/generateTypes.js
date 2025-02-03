import { execSync } from "child_process";
import dotenv from "dotenv";

dotenv.config();

const projectId = process.env.SUPABASE_PROJECT_ID;
if (!projectId) {
  console.error(
    "VITE_SUPABASE_PROJECT_ID is not defined in the environment variables."
  );
  process.exit(1);
}

try {
  execSync(
    `supabase gen types typescript --project-id ${projectId} > src/db/database.types.ts`,
    { stdio: "inherit" }
  );
  console.log("✅ Type generation successful.");
} catch (error) {
  console.error("❌ Type generation failed.");
  process.exit(1);
}
