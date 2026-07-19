import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg-pattern" aria-hidden="true" />

            <div className="container hero-container">
                {/* Left: text content */}
                <div className="hero-content">
                    <span className="section-eyebrow">Real Estate Data Intelligence</span>

                    <h1 className="hero-heading">
                        Know where to invest <span className="hero-accent">before</span> everyone else does.
                    </h1>

                    <p className="hero-subtext">
                        We collect, analyse, and translate property data into decisions you can act on.
                        Built for developers, investors, and asset managers across Africa.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary">Talk to Us</button>
                        <button className="btn btn-outline">See Our Services →</button>
                    </div>

                    <div className="hero-trust">
                        <div className="trust-item">
                            <span className="trust-number">500+</span>
                            <span className="trust-label">Properties analysed</span>
                        </div>
                        <div className="trust-divider" aria-hidden="true" />
                        <div className="trust-item">
                            <span className="trust-number">10+</span>
                            <span className="trust-label">Clients served</span>
                        </div>
                        <div className="trust-divider" aria-hidden="true" />
                        <div className="trust-item">
                            <span className="trust-number">1</span>
                            <span className="trust-label">Market covered</span>
                        </div>
                    </div>
                </div>

                {/* Right: visual */}
                <div className="hero-visual" aria-hidden="true">
                    <div className="hero-card hero-card--main">
                        <div className="card-header">
                            <span className="card-dot card-dot--green" />
                            <span className="card-label">Market Intelligence Report</span>
                        </div>
                        <div className="card-chart">
                            <div className="chart-bar" style={{ height: "45%", "--delay": "0s" }} />
                            <div className="chart-bar" style={{ height: "65%", "--delay": "0.1s" }} />
                            <div className="chart-bar" style={{ height: "50%", "--delay": "0.2s" }} />
                            <div className="chart-bar" style={{ height: "80%", "--delay": "0.3s" }} />
                            <div className="chart-bar" style={{ height: "60%", "--delay": "0.4s" }} />
                            <div className="chart-bar chart-bar--accent" style={{ height: "90%", "--delay": "0.5s" }} />
                            <div className="chart-bar" style={{ height: "70%", "--delay": "0.6s" }} />
                        </div>
                        <div className="card-footer">
                            <span className="card-stat">+18.4% YoY</span>
                            <span className="card-region">Ibadan, NG</span>
                        </div>
                    </div>

                    <div className="hero-card hero-card--secondary">
                        <div className="card-icon">🎯</div>
                        <div>
                            <p className="card-title">Investment Score</p>
                            <p className="card-value">8.7 / 10</p>
                        </div>
                    </div>

                    <div className="hero-card hero-card--tertiary">
                        <div className="card-icon">📍</div>
                        <div>
                            <p className="card-title">Risk Level</p>
                            <p className="card-value card-value--low">Low</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
