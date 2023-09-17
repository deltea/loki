import type { PageServerLoad } from "./$types";

export const load = (async ({ url }) => {
  return { text: url.searchParams.get("text") ?? "Loki" };
}) satisfies PageServerLoad;
