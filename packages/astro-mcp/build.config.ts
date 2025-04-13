import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	entries: [],
	clean: true,
	rollup: {
		esbuild: {
			minify: true,
		},
	},
});
