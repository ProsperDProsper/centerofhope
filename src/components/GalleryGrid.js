"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getGalleryImages } from "../sanity/lib/queries";

const GalleryGrid = () => {
	const [images, setImages] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [loading, setLoading] = useState(true);
	const imagesPerPage = 9;

	useEffect(() => {
		fetchImages();
	}, [currentPage]);

	const fetchImages = async () => {
		try {
			const { images: imageData, total } = await getGalleryImages(
				currentPage,
				imagesPerPage
			);
			setImages(imageData);
			setTotalPages(Math.ceil(total / imagesPerPage));
			setLoading(false);
		} catch (error) {
			console.error("Error fetching images:", error);
			setLoading(false);
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			{loading ? (
				<div className="d-flex justify-content-center align-items-center min-vh-50">
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{images.map((image) => (
							<div key={image._id} className="card">
								<div className="position-relative" style={{ height: "16rem" }}>
									<Image
										src={image.imageUrl}
										alt={image.alt || image.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="card-body">
									<h3 className="card-title h5">{image.title}</h3>
									<p className="card-text text-muted">{image.description}</p>
								</div>
							</div>
						))}
					</div>

					<div className="d-flex justify-content-center align-items-center gap-3 mt-4">
						<button
							className="btn btn-outline-primary d-flex align-items-center gap-2"
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
						>
							<i className="bi bi-chevron-left"></i>
							Previous
						</button>
						<span className="text-muted">
							Page {currentPage} of {totalPages}
						</span>
						<button
							className="btn btn-outline-primary d-flex align-items-center gap-2"
							onClick={() =>
								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
							}
							disabled={currentPage === totalPages}
						>
							Next
							<i className="bi bi-chevron-right"></i>
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default GalleryGrid;
