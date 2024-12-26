"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity/lib/image";
import { getAllPosts } from "../../../sanity/lib/queries";

const BlogArea = () => {
	const [blogs, setBlogs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6; // Set items per page to 6
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await getAllPosts();
			setBlogs(posts);
		};
		fetchPosts();
	}, []);

	// Update pagination logic
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = blogs.slice(itemOffset, endOffset);
	const totalPages = Math.ceil(blogs.length / itemsPerPage);
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

	const handlePageClick = (pageNumber) => {
		if (pageNumber < 1 || pageNumber > totalPages) return;
		const newOffset = (pageNumber - 1) * itemsPerPage;
		setItemOffset(newOffset);
		setCurrentPage(pageNumber);
	};

	const renderPaginationLinks = () =>
		pageNumbers.map((pageNumber) => (
			<li
				key={pageNumber}
				className={
					pageNumber === currentPage ? "page-numbers current" : "page-numbers"
				}
			>
				<a
					style={{ cursor: "pointer" }}
					onClick={() => handlePageClick(pageNumber)}
				>
					{pageNumber}
				</a>
			</li>
		));

	return (
		<div className="blog-page-area py-120 rel z-1">
			<div className="container">
				<div className="row justify-content-center">
					{currentItems.map((post) => (
						<div key={post._id} className="col-xl-4 col-md-6 mb-4">
							<div className="blog-item h-full flex flex-col">
								<div className="blog-item__img relative w-full pb-[75%]">
									{/* 4:3 aspect ratio container */}
									<div className="absolute inset-0">
										<Image
											src={urlFor(post.mainImage).url()}
											alt={post.title}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
									<div className="post-date">
										<b>{new Date(post.publishedAt).getDate()}</b>
										<span>
											{new Date(post.publishedAt).toLocaleString("default", {
												month: "short",
											})}
										</span>
									</div>
								</div>
								<div className="blog-item__content flex flex-col flex-grow">
									<ul className="blog-meta">
										<li>
											<i className="flaticon-user"></i>{" "}
											<a href="#">{post.author.name}</a>
										</li>
									</ul>
									<h4>
										<Link href={`/blog/${post.slug}`} target="_blank">
											{post.title}
										</Link>
									</h4>
									<p className="flex-grow">{post.shortDescription}</p>
									<Link
										href={`/blog/${post.slug}`}
										target="_blank"
										className="read-more mt-auto"
									>
										Read More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="pagination pt-20">
					<ul
						className="list-wrap d-flex align-items-center justify-content-center"
						style={{ margin: "0" }}
					>
						<li className="prev page-numbers">
							<a
								onClick={() => handlePageClick(currentPage - 1)}
								style={{ cursor: "pointer" }}
								className={currentPage === 1 ? "disabled" : ""}
							>
								<i className="flaticon-left-chevron"></i>
							</a>
						</li>
						{renderPaginationLinks()}
						<li className="next page-numbers">
							<a
								onClick={() => handlePageClick(currentPage + 1)}
								style={{ cursor: "pointer" }}
								className={currentPage === totalPages ? "disabled" : ""}
							>
								<i className="flaticon-chevron"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BlogArea;
