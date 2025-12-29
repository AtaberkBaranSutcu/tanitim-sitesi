// src/App.jsx
import React from "react";
import "./styles.css";

export default function App() {
    return (
        <div className="page">
            <header className="header">
                <div className="container header__inner">
                    <a className="brand" href="#top" aria-label="Home">
                        <div className="brand__logo" aria-hidden="true">
                            LOGO
                        </div>
                        <div className="brand__text">
                            <div className="brand__name">Business Name</div>
                            <div className="brand__tagline">Short tagline here</div>
                        </div>
                    </a>

                    <nav className="nav" aria-label="Page menu">
                        <a className="nav__link" href="#about">
                            About
                        </a>
                        <a className="nav__link" href="#services">
                            Services
                        </a>
                        <a className="nav__link" href="#contact">
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            <main id="top">
                <section className="hero">
                    <div className="container hero__inner">
                        <div className="hero__content">
                            <h1 className="hero__title">Modern one\-page promo website</h1>
                            <p className="hero__subtitle">
                                Briefly explain what you do, who you serve, and why clients should
                                choose you\.
                            </p>

                            <div className="hero__cta">
                                <a className="btn btn--primary" href="#contact">
                                    Contact Now
                                </a>
                                <a className="btn btn--ghost" href="#about">
                                    Learn More
                                </a>
                            </div>

                            <div className="hero__meta">
                                <div className="metaCard">
                                    <div className="metaCard__label">Hours</div>
                                    <div className="metaCard__value">Mon \- Sat 09:00 \- 18:00</div>
                                </div>
                                <div className="metaCard">
                                    <div className="metaCard__label">Location</div>
                                    <div className="metaCard__value">City / District</div>
                                </div>
                                <div className="metaCard">
                                    <div className="metaCard__label">Phone</div>
                                    <div className="metaCard__value">
                                        <a className="link" href="tel:+905555555555">
                                            \+90 555 555 55 55
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero__card" aria-label="Highlights">
                            <h2 className="cardTitle">Quick Summary</h2>
                            <ul className="checkList">
                                <li>Professional service</li>
                                <li>Fast response</li>
                                <li>Fair pricing</li>
                                <li>Customer focused</li>
                            </ul>
                            <div className="cardDivider"/>
                            <div className="cardContact">
                                <div className="cardContact__label">WhatsApp</div>
                                <a
                                    className="btn btn--primary btn--full"
                                    href="https://wa.me/905555555555"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Message on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="section">
                    <div className="container">
                        <h2 className="section__title">About</h2>
                        <p className="section__text">
                            Write a short story about your business, experience, and approach\.
                        </p>

                        <div className="grid3">
                            <div className="feature">
                                <div className="feature__title">Experience</div>
                                <div className="feature__text">Example: 10\+ years in the industry\.</div>
                            </div>
                            <div className="feature">
                                <div className="feature__title">Quality</div>
                                <div className="feature__text">Example: Strong workmanship standards\.</div>
                            </div>
                            <div className="feature">
                                <div className="feature__title">Trust</div>
                                <div className="feature__text">Example: Transparent process and clear pricing\.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="section section--alt">
                    <div className="container">
                        <h2 className="section__title">Services</h2>
                        <p className="section__text">Keep service titles short and clear\.</p>

                        <div className="grid3">
                            <article className="serviceCard">
                                <h3 className="serviceCard__title">Service 1</h3>
                                <p className="serviceCard__text">Brief description\.</p>
                            </article>
                            <article className="serviceCard">
                                <h3 className="serviceCard__title">Service 2</h3>
                                <p className="serviceCard__text">Brief description\.</p>
                            </article>
                            <article className="serviceCard">
                                <h3 className="serviceCard__title">Service 3</h3>
                                <p className="serviceCard__text">Brief description\.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section">
                    <div className="container">
                        <h2 className="section__title">Contact</h2>
                        <p className="section__text">Update the info below for your business\.</p>

                        <div className="contactGrid">
                            <div className="contactCard">
                                <div className="contactCard__label">Phone</div>
                                <a className="contactCard__value link" href="tel:+905555555555">
                                    \+90 555 555 55 55
                                </a>
                            </div>

                            <div className="contactCard">
                                <div className="contactCard__label">Email</div>
                                <a className="contactCard__value link" href="mailto:info@example.com">
                                    info@example.com
                                </a>
                            </div>

                            <div className="contactCard">
                                <div className="contactCard__label">Address</div>
                                <div className="contactCard__value">Street, No, City</div>
                            </div>
                        </div>

                        <div className="contactActions">
                            <a className="btn btn--primary" href="tel:+905555555555">
                                Call
                            </a>
                            <a
                                className="btn btn--ghost"
                                href="https://wa.me/905555555555"
                                target="_blank"
                                rel="noreferrer"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container footer__inner">
                    <div>© {new Date().getFullYear()} Business Name</div>
                    <div className="footer__links">
                        <a className="link" href="#about">
                            About
                        </a>
                        <a className="link" href="#services">
                            Services
                        </a>
                        <a className="link" href="#contact">
                            Contact
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}