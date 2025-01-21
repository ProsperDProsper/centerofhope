"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getGalleryImages } from "../sanity/lib/queries";

const GalleryGrid = () => {
	const [images, setImages] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [loading, setLoading] = useState(true);
	const [selectedImage, setSelectedImage] = useState(null);
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

	const openModal = (image) => {
		setSelectedImage(image);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setSelectedImage(null);
		document.body.style.overflow = "unset";
	};

	return (
		<div className="relative min-h-screen">
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
								<div
									key={image._id}
									className="card cursor-default md:cursor-pointer transition-transform duration-300 md:hover:scale-105"
									onClick={() => window.innerWidth >= 768 && openModal(image)}
								>
									<div
										className="position-relative"
										style={{ height: "16rem" }}
									>
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

						{/* Modal - Only shown on md and larger screens */}
						{selectedImage && (
							<div
								className="hidden md:flex fixed inset-0 bg-black bg-opacity-75 z-20"
								onClick={closeModal}
							>
								<div className="min-h-screen px-4 py-6 flex items-center justify-center w-full">
									<div
										className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl mx-auto"
										onClick={(e) => e.stopPropagation()}
									>
										<button
											className="absolute right-3 top-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-30"
											onClick={closeModal}
										>
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>

										<div className="relative h-[60vh] w-full">
											<Image
												src={selectedImage.imageUrl}
												alt={selectedImage.alt || selectedImage.title}
												fill
												className="object-contain"
												sizes="(min-width: 768px) 80vw, 100vw"
											/>
										</div>

										<div className="p-4 bg-white">
											<h3 className="text-xl font-semibold mb-2">
												{selectedImage.title}
											</h3>
											<p className="text-gray-600">
												{selectedImage.description}
											</p>
										</div>
									</div>
								</div>
							</div>
						)}

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
		</div>
	);
};

export default GalleryGrid;
