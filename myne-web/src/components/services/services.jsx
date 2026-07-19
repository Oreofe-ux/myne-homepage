import "./services.css";

const services = [
    {
        icon: "📊",
        title: "Market Intelligence",
        description: "Track price trends, demand shifts, and emerging hotspots before they become obvious to the rest of the market.",
        tag: "For investors & developers",
    },
    {
        icon: "🏢",
        title: "Asset Management",
        description: "Full lifecycle management of property portfolios — from acquisition data to ongoing performance monitoring.",
        tag: "For asset managers",
    },
    {
        icon: "🛡️",
        title: "Risk Assessment",
        description: "Flag legal, environmental, and financial risks on any property before you commit your capital.",
        tag: "For lenders & buyers",
    },
    {
        icon: "🎯",
        title: "Investment Scoring",
        description: "Rank properties and areas by ROI potential using our proprietary scoring models and local market data.",
        tag: "For investors",
    },
];

function Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="services-header">
                    <span className="section-eyebrow">What We Do</span>
                    <h2 className="section-heading">Intelligence that moves at the speed of the market.</h2>
                    <p className="section-subtext">
                        From raw data to clear decisions — we cover every stage of the property intelligence cycle.
                    </p>
                </div>

                <ul className="services-grid">
                    {services.map((service, i) => (
                        <li key={i} className="service-card">
                            <div className="service-icon" aria-hidden="true">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <span className="service-tag">{service.tag}</span>
                        </li>
                    ))}
                </ul>

                <div className="services-cta">
                    <button className="btn btn-outline-dark">View All Services →</button>
                </div>
            </div>
        </section>
    );
}

export default Services;
