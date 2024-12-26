import { defineField, defineArrayMember } from "sanity";

const blockContent = {
	title: "Block Content",
	name: "blockContent",
	type: "array",
	of: [
		defineArrayMember({
			title: "Block",
			type: "block",
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "H1", value: "h1" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "Quote", value: "blockquote" },
			],
			lists: [{ title: "Bullet", value: "bullet" }],
			marks: {
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
				],
				annotations: [
					defineField({
						title: "URL",
						name: "link",
						type: "object",
						fields: [
							defineField({
								title: "URL",
								name: "href",
								type: "string",
							}),
							defineField({
								title: "Open in new tab",
								name: "blank",
								type: "boolean",
							}),
						],
						initialValue: {
							blank: true,
						},
					}),
				],
			},
		}),
		defineArrayMember({
			type: "image",
			options: { hotspot: true },
		}),

		defineArrayMember({
			type: "object",
			name: "youtube",
			title: "YouTube Video",
			fields: [
				defineField({
					title: "YouTube URL",
					name: "url",
					type: "url",
					description: "Paste the YouTube video URL here.",
					validation: (Rule) =>
						Rule.uri({
							scheme: ["http", "https"],
						}).required(),
				}),
				defineField({
					title: "Caption",
					name: "caption",
					type: "string",
					description: "Optional caption for the video.",
				}),
			],
		}),
	],
};

export default blockContent;
