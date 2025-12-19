import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold display-4 mb-3">Get In Touch</h1>
                    <p className="text-muted lead">Have a question? We'd love to hear from you.</p>
                </div>

                <div className="row g-5">
                    {/* Contact Info */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm p-4 h-100 bg-dark text-white rounded-4">
                            <h3 className="fw-bold mb-4">Contact Information</h3>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-white text-dark rounded-circle p-3 me-3">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="mb-0 small opacity-75">Call Us</p>
                                    <p className="mb-0 fw-bold">+91 93446 05885</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-white text-dark rounded-circle p-3 me-3">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="mb-0 small opacity-75">Email Us</p>
                                    <p className="mb-0 fw-bold">support@looque.com</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-white text-dark rounded-circle p-3 me-3">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="mb-0 small opacity-75">Visit Us</p>
                                    <p className="mb-0 fw-bold">23/b Fashion Street, Coimbatore, Tamil Nadu</p>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h5 className="fw-bold mb-3">Our Store Hours</h5>
                                <p className="mb-1 small opacity-75">Mon - Sat: 10:00 AM - 08:00 PM</p>
                                <p className="mb-0 small opacity-75">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4 h-100">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg bg-light border-0"
                                            placeholder="John Doe"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg bg-light border-0"
                                            placeholder="john@example.com"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-semibold">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg bg-light border-0"
                                            placeholder="How can we help?"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-semibold">Message</label>
                                        <textarea
                                            className="form-control form-control-lg bg-light border-0"
                                            rows="5"
                                            placeholder="Write your message here..."
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-dark btn-lg px-5 mt-3 d-flex align-items-center gap-2">
                                            Send Message <FaPaperPlane size={14} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container-fluid px-0 mt-5">
                <div style={{ height: '450px', width: '100%' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62674.5846204408!2d76.95952472193476!3d10.95116749641109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85a728e065147%3A0x1bfd9ecc11a76d40!2sPodanur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1766166193131!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Store Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
