import "./howItWorks.css";

const steps = [
    {
        number: "01",
        title: "Tell us your goal",
        description: "Share what you're trying to buy, build, or evaluate. A 30-minute conversation is all it takes to get started.",
    },
    {
        number: "02",
        title: "We run the analysis",
        description: "Our team processes data from multiple verified sources and builds your report or model.",
    },
    {
        number: "03",
        title: "You get clear answers",
        description: "Delivered as a report, dashboard, or direct consultation — whatever format works best for you.",
    },
];

function HowItWorks() {
    return (
        <section className="how-it-works">
            <div className="container">
                <div className="hiw-header">
                    <span className="section-eyebrow">The Process</span>
                    <h2 className="section-heading">Simple from your end. Rigorous from ours.</h2>
                    <p className="section-subtext">
                        You don't need to be a data expert to work with us. Here's what the process looks like.
                    </p>
                </div>

                <ol className="hiw-steps">
                    {steps.map((step, i) => (
                        <li key={i} className="hiw-step">
                            <div className="step-number-wrap">
                                <span className="step-number">{step.number}</span>
                                {i < steps.length - 1 && <span className="step-connector" aria-hidden="true" />}
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default HowItWorks;
