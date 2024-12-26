import { defineField, defineArrayMember } from "sanity";

const post = {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),

		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				unique: true,
				slugify: (input) => {
					return input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^\w-]+/g, "");
				},
			},
			validation: (rule) =>
				rule.required().custom((fields) => {
					if (
						fields?.current !== fields?.current?.toLowerCase() ||
						fields?.current.split(" ").includes("")
					) {
						return "Slug must be lowercase and not be included space";
					}
					return true;
				}),
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			validation: (rule) => rule.required(),
			of: [
				defineArrayMember({
					type: "string",
					validation: (rule) =>
						rule.custom((fields) => {
							if (
								fields !== fields.toLowerCase() ||
								fields.split(" ").includes("")
							) {
								return "Tags must be lowercase and not be included space";
							}
							return true;
						}),
				}),
			],
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author" },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "mainImage",
			validation: (rule) => rule.required(),
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
			// validation: rule => rule.required(),
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "shortDescription",
			title: "Short Description",
			type: "text",
			description: "A brief summary of the post (maximum 200 characters)",
			validation: (rule) =>
				rule
					.required()
					.min(10)
					.max(500)
					.error("Short description should be between 10 and 200 characters"),
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
			validation: (rule) => rule.required(),
		}),
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};

export default post;
