import { defineField } from "sanity";

export default defineField({
	name: "table",
	type: "object",
	title: "Table",
	fields: [
		defineField({
			name: "rows",
			type: "array",
			title: "Rows",
			of: [{ type: "string" }],
		}),
	],
});
