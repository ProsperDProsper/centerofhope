"use client"
import React from "react"
import Link from "next/link"

const DonateArea = () => {
    // Format WhatsApp number for link
    const whatsappNumber = "+255 629962905"
    const whatsappLink = `https://wa.me/${whatsappNumber}`

    return (
        <div className="donation-area py-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center mb-5">
                        <div className="section-title">
                            <span className="section-title__subtitle mb-10">Get Involved</span>
                            <h2>Make a <span>Difference</span></h2>
                        </div>
                        <p className="lead mb-0">
                            Join us in making a difference! Whether you want to donate, volunteer, or partner with us, your
                            support helps us transform lives. Together, we can ensure every child in Musoma has access to
                            quality education and opportunities for a brighter future.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Ways to Help */}
                    <div className="col-lg-4">
                        <div className="help-card h-100 bg-white p-4 p-xl-5 rounded-lg shadow-sm">
                            <div className="icon mb-4">
                                <i className="fas fa-hands-helping text-4xl" style={{ color: '#00ADF2' }}></i>
                            </div>
                            <h3 className="h4 mb-4">Connect With Us</h3>
                            <ul className="list-unstyled ways-to-help">
                                <li className="mb-3">
                                    <i className="fas fa-check-circle me-2" style={{ color: '#00ADF2' }}></i>
                                    Make a donation
                                </li>
                                <li className="mb-3">
                                    <i className="fas fa-check-circle me-2" style={{ color: '#00ADF2' }}></i>
                                    Volunteer with us
                                </li>
                                <li className="mb-3">
                                    <i className="fas fa-check-circle me-2" style={{ color: '#00ADF2' }}></i>
                                    Visit our website: 
                                    <a href="https://centerofhope.or.tz" target="_blank" rel="noopener noreferrer" className="ms-1 text-gray-600 hover:text-primary">
                                        centerofhope.or.tz
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <i className="fas fa-check-circle me-2" style={{ color: '#00ADF2' }}></i>
                                    Follow us on Instagram: 
                                    <a href="https://www.instagram.com/centerofhope2024" target="_blank" rel="noopener noreferrer" className="ms-1 text-gray-600 hover:text-primary">
                                        @centerofhope2024
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Donation Account Details */}
                    <div className="col-lg-4">
                        <div className="donation-card h-100 bg-white p-4 p-xl-5 rounded-lg shadow-sm">
                            <div className="icon mb-4">
                                <i className="fas fa-money-check-alt text-4xl" style={{ color: '#00ADF2' }}></i>
                            </div>
                            <h3 className="h4 mb-4">Account Details</h3>
                            <div className="account-info">
                                <div className="mb-3">
                                    <p className="font-medium mb-1">Bank Name:</p>
                                    <p className="text-gray-600">CRDB Bank</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-medium mb-1">Account Name:</p>
                                    <p className="text-gray-600">Center of Hope</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-medium mb-1">Account Number:</p>
                                    <p className="text-gray-600">0152355921600</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-medium mb-1">Swift Code:</p>
                                    <p className="text-gray-600">CRDBTZTZ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="col-lg-4">
                        <div className="contact-card h-100 bg-white p-4 p-xl-5 rounded-lg shadow-sm">
                            <div className="icon mb-4">
                                <i className="fas fa-phone-alt text-4xl" style={{ color: '#00ADF2' }}></i>
                            </div>
                            <h3 className="h4 mb-4">Contact Us</h3>
                            <div className="contact-info">
                                <div className="mb-3">
                                    <p className="font-medium mb-1">Phone 1:</p>
                                    <a href="tel:+255785769548" className="text-gray-600 hover:text-primary">
                                        +255 785 769 9548
                                    </a>
                                </div>
                                <div className="mb-3">
                                    <p className="font-medium mb-1">Email:</p>
                                    <a href="mailto:centerofhope24@gmail.com" className="text-gray-600 hover:text-primary">
                                        centerofhope24@gmail.com
                                    </a>
                                </div>
                                <div className="mb-3">
                                    <p className="font-medium mb-1">WhatsApp:</p>
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                                     +255 629962905
                                    </a>
                                </div>
                                <div className="mb-3">
                                    <p className="font-medium mb-1">Address:</p>
                                    <p className="text-gray-600">P. O Box 232 Musoma, Tanzania</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateArea