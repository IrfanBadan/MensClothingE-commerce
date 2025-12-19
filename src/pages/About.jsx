import React from 'react';

function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero py-5 mb-5 bg-light">
                <div className="container py-5 text-center">
                    <h1 className="display-3 fw-bold mb-4">Redefining Men's Style</h1>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                        LooQue is not just a brand; it's a movement towards effortless elegance and contemporary fashion.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="container py-5">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <img
                            src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071&auto=format&fit=crop"
                            alt="Our Story"
                            className="img-fluid rounded-4 shadow-lg"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-4">Our Story</h2>
                        <p className="text-muted mb-4">
                            Founded in 2023, MEN'S FASHION (LooQue) was born out of a desire to provide high-quality, stylish, and comfortable apparel for the modern man. We believe that what you wear is an extension of your personality.
                        </p>
                        <p className="text-muted mb-4">
                            Our collection is meticulously curated to ensure that every piece meets our high standards of quality and style. From casual tees to formal fits, we ensure you look your best in every situation.
                        </p>
                        <div className="row g-4 mt-2">
                            <div className="col-sm-4">
                                <h4 className="fw-bold mb-0">10k+</h4>
                                <p className="small text-muted">Happy Clients</p>
                            </div>
                            <div className="col-sm-4">
                                <h4 className="fw-bold mb-0">500+</h4>
                                <p className="small text-muted">Product Styles</p>
                            </div>
                            <div className="col-sm-4">
                                <h4 className="fw-bold mb-0">50+</h4>
                                <p className="small text-muted">Global Partners</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-dark text-white py-5 mt-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-uppercase">Our Values</h2>
                        <div className="mx-auto bg-primary" style={{ height: '3px', width: '50px' }}></div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4 text-center">
                            <div className="p-4 border border-secondary rounded-4 h-100">
                                <h5 className="fw-bold mb-3 text-uppercase">Quality First</h5>
                                <p className="text-light opacity-75">We never compromise on materials. Every stitch is a promise of durability and comfort.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="p-4 border border-secondary rounded-4 h-100">
                                <h5 className="fw-bold mb-3 text-uppercase">Sustainability</h5>
                                <p className="text-light opacity-75">We are committed to ethical manufacturing and reducing our environmental footprint.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="p-4 border border-secondary rounded-4 h-100">
                                <h5 className="fw-bold mb-3 text-uppercase">Innovation</h5>
                                <p className="text-light opacity-75">Fashion is ever-evolving, and so are we. We stay ahead of trends to keep you looking fresh.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
