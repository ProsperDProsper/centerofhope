import { client } from "./client";

// Base fields that we'll reuse across queries
export const postFields = `
  _id,
  title,
  shortDescription,
  metadata,
  "slug": slug.current,
  tags,
  "author": author->{
    name,
    "image": image.asset->url
  },
  "mainImage": mainImage.asset->url,
  publishedAt,
  body
`;

// Get all posts
export async function getAllPosts() {
	const query = `
    *[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }
  `;
	return client.fetch(query);
}

// Get a single post by slug
export async function getPostBySlug(slug) {
	const query = `
    *[_type == "post" && slug.current == $slug][0] {
      ${postFields},
      "relatedPosts": *[
        _type == "post" && 
        slug.current != $slug && 
        count(tags[@ in ^.tags]) > 0
      ] | order(count(tags[@ in ^.tags]) desc)[0...3] {
        ${postFields}
      }
    }
  `;
	return client.fetch(query, { slug });
}

// Get posts by tag
export async function getPostsByTag(tag) {
	const query = `
    *[_type == "post" && $tag in tags] | order(publishedAt desc) {
      ${postFields}
    }
  `;
	return client.fetch(query, { tag });
}

// Get featured/recent posts
export async function getRecentPosts(limit = 3) {
	const query = `
    *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
      ${postFields}
    }
  `;
	return client.fetch(query);
}

// Get all tags used in posts
export async function getAllTags() {
	const query = `
    *[_type == "post"].tags[]
  `;
	return client.fetch(query).then((tags) => [...new Set(tags)].sort());
}

// Get posts by author
export async function getPostsByAuthor(authorId) {
	const query = `
    *[_type == "post" && author._ref == $authorId] | order(publishedAt desc) {
      ${postFields}
    }
  `;
	return client.fetch(query, { authorId });
}

// Get posts by date range
export async function getPostsByDateRange(startDate, endDate) {
	const query = `
    *[
      _type == "post" && 
      publishedAt >= $startDate && 
      publishedAt <= $endDate
    ] | order(publishedAt desc) {
      ${postFields}
    }
  `;
	return client.fetch(query, { startDate, endDate });
}
