import { defineField } from "sanity";

export default defineField({
	name: "code",
	title: "Code",
	type: "object",
	fields: [
		defineField({
			name: "code",
			title: "Code",
			type: "text",
		}),
		defineField({
			name: "language",
			title: "Language",
			type: "string",
		}),
	],
});
