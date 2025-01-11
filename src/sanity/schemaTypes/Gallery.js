import { defineField } from "sanity";

const Gallery = defineField({
	name: "gallery",
	title: "Gallery",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative Text",
					description: "Description of the image for accessibility.",
				},
			],
			validation: (Rule) =>
				Rule.required()
					.custom((image) => {
						if (!image?.asset?._ref) return true;
						// Check if image size is less than 2MB (you'll need to implement this on the frontend)
						return true;
					})
					.error("Image must be less than 2MB"),
		}),
		defineField({
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "image",
		},
	},
});
export default Gallery;
