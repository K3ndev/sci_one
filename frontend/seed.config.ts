import { SeedPostgres } from "@snaplet/seed/adapter-postgres";
import { defineConfig } from "@snaplet/seed/config";
import postgres from "postgres";
import dotenv from 'dotenv';

export default defineConfig({
  adapter: () => {
    dotenv.config();
    const supabase_url = process.env.PUBLIC_POSTGRESSQL as string
    const client = postgres(supabase_url);
    return new SeedPostgres(client);
  },
});