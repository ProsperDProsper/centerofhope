import { defineField } from "sanity";

const author = {
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "bio",
			title: "Bio",
			type: "string",
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
};

export default author;
