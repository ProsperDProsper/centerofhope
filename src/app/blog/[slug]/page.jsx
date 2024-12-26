import { client } from "../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import CommonSocialIcon from "@/components/common/SocialIcon";
import HeaderOne from "../../../layout/headers/HeaderOne";
import Breadcrumb from "../../../components/common/Breadcrumb";

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  shortDescription,
  slug,
  tags,
  "author": author->{name, "image": image.asset->url},
  "mainImage": mainImage.asset->url,
  publishedAt,
  body
}`;

const recentPostsQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...5]{
  title,
  slug,
  publishedAt,
  shortDescription,
  "mainImage": mainImage.asset->url
}`;

const BlogDetailsArea = ({ post, recentPosts }) => {
	if (!post) return null;

	return (
		<div className="blog-details-area py-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="blog-details-content mb-55">
							<div className="details-image rel mb-35">
								{post.mainImage && (
									<Image
										src={post.mainImage}
										alt={post.title}
										width={800}
										height={500}
										className="max-h-[500px] w-[100%] object-cover"
									/>
								)}
								<div className="post-date">
									<b>{new Date(post.publishedAt).getDate()}</b>
									<span>
										{new Date(post.publishedAt).toLocaleString("default", {
											month: "short",
										})}
									</span>
								</div>
							</div>

							<ul className="blog-meta">
								<li>
									<i className="flaticon-user"></i>
									<Link href="#">{post.author.name}</Link>
								</li>
							</ul>

							<div className="blog-content">
								<PortableText value={post.body} />
							</div>

							<div className="tag-and-share">
								<div className="row align-items-center">
									<div className="col-md-7">
										<div className="tags">
											<strong>Tags: </strong>
											{post.tags?.map((tag, i) => (
												<Link key={i} href={`/blog/tag/${tag}`}>
													{tag}
												</Link>
											))}
										</div>
									</div>
									<div className="col-md-5 text-md-end">
										<div className="share-area">
											<strong>Connect With Us </strong>
											<CommonSocialIcon />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="sidebar-widget-area">
							<div className="widget widget_latest_post mb-30">
								<h4 className="widget-title">Latest Posts</h4>
								<ul className="recent-posts list-unstyled">
									{recentPosts?.map((recentPost) => (
										<li
											key={recentPost.slug.current}
											className="d-flex align-items-center mb-20 sidebar-item"
										>
											{/* Sidebar Image */}
											<div className="post-thumbnail">
												{recentPost.mainImage && (
													<Link href={`/blog/${recentPost.slug.current}`}>
														<Image
															src={recentPost.mainImage}
															alt={recentPost.title}
															width={100}
															height={100}
															className="object-cover rounded uniform-image"
														/>
													</Link>
												)}
											</div>
											{/* Sidebar Content */}
											<div className="post-content ms-3">
												<h6 className="post-title mb-1">
													<Link
														href={`/blog/${recentPost.slug.current}`}
														className="text-decoration-none"
													>
														{recentPost.title}
													</Link>
												</h6>
												<span className="date d-block text-muted">
													<i className="far fa-calendar-alt me-1"></i>
													{new Date(
														recentPost.publishedAt
													).toLocaleDateString()}
												</span>
												{recentPost.shortDescription && (
													<p className="mt-2 text-sm text-muted sidebar-description">
														{recentPost.shortDescription.slice(0, 100)}...
													</p>
												)}
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export async function generateStaticParams() {
	const slugs = await client.fetch(
		`*[_type == "post" && defined(slug.current)][].slug.current`
	);
	return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }) {
	const post = await client.fetch(postQuery, { slug: params.slug });
	const recentPosts = await client.fetch(recentPostsQuery, {
		slug: params.slug,
	});

	return (
		<>
			<HeaderOne style_1={false} style_2={false} />
			<main>
				<Breadcrumb
					page_title={post.title}
					page_list={`written by ${post.author.name}`}
					style={false}
				/>
				<BlogDetailsArea post={post} recentPosts={recentPosts} />
			</main>
		</>
	);
}
