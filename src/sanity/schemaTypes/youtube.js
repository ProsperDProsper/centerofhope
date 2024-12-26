// schemas/youtube.js
export default {
	name: "youtube",
	title: "YouTube",
	type: "object",
	fields: [
		{
			name: "url",
			title: "YouTube Video URL",
			type: "url",
			description:
				"Enter the full YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)",
			validation: (Rule) => Rule.required().error("A YouTube URL is required"),
		},
		{
			name: "title",
			title: "Video Title",
			type: "string",
			description: "Add a title for the video (optional)",
		},
		{
			name: "description",
			title: "Video Description",
			type: "text",
			description: "Add a description for the video (optional)",
			rows: 3,
		},
	],
	preview: {
		select: {
			title: "title",
			url: "url",
		},
		prepare({ title, url }) {
			return {
				title: title || "Untitled Video",
				subtitle: url,
			};
		},
	},
};
