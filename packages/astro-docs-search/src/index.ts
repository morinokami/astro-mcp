export interface Env {
	AI: Ai;
}

interface RequestBody {
	query: string;
}

export default {
	async fetch(request, env, _ctx): Promise<Response> {
		const path = new URL(request.url).pathname;
		if (path.startsWith("/favicon")) {
			return new Response("", { status: 404 });
		}

		if (request.method !== "POST") {
			return new Response("Method not allowed", { status: 405 });
		}

		const { query } = (await request.json()) as RequestBody;
		if (query.length === 0) {
			return new Response("Bad request", { status: 400 });
		}

		const docs = await env.AI.autorag("astro-docs-search").search({
			query,
			rewrite_query: false,
			max_num_results: 5, // TODO: Make this configurable?
			ranking_options: {
				score_threshold: 0.5,
			},
		});

		return new Response(JSON.stringify({ docs: docs.data }));
	},
} satisfies ExportedHandler<Env>;
