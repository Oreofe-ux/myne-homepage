import "./whyChooseUs.css";

const reasons = [
    {
        icon: "🗺️",
        title: "Local Data Depth",
        description: "We collect and verify data specific to Nigerian and West African markets — not generic models trained on foreign cities.",
    },
    {
        icon: "👥",
        title: "Human + Data",
        description: "Expert analysts review every report before delivery. You're not getting a raw algorithm output — you're getting verified intelligence.",
    },
    {
        icon: "⚡",
        title: "Fast Turnaround",
        description: "Most reports are delivered within 48–72 hours. No month-long waiting while the market moves without you.",
    },
];

function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="wcu-inner">
                    <div className="wcu-header">
                        <span className="section-eyebrow">Our Edge</span>
                        <h2 className="section-heading">Built for the African market. Not imported from abroad.</h2>
                        <p className="section-subtext">
                            Most data platforms are built for the US or UK market. We're built for here.
                        </p>
                    </div>

                    <ul className="wcu-grid">
                        {reasons.map((reason, i) => (
                            <li key={i} className="wcu-card">
                                <span className="wcu-icon" aria-hidden="true">{reason.icon}</span>
                                <h3 className="wcu-title">{reason.title}</h3>
                                <p className="wcu-desc">{reason.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
