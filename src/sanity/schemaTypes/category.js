import { defineField } from "sanity";

const category = {
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		defineField({
			name: "tagname",
			title: "Tag Name",
			type: "string",
			options: {
				source: "tagname",
				unique: true,
				slugify: (input) => {
					return input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^\w-]+/g, "");
				},
			},
			validation: (rule) =>
				rule.custom((value) => {
					if (value !== value.toLowerCase() || value.split(" ").includes("")) {
						return "Tags must be lowercase and not be included space";
					}
					return true;
				}),
		}),
		defineField({
			name: "ogImage",
			title: "Open Graph Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
	],
};

export default category;
