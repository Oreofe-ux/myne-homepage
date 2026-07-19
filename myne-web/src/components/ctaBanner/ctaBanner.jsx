import "./ctaBanner.css";

function CtaBanner() {
    return (
        <section className="cta-banner-section">
            <div className="container">
                <div className="cta-banner">
                    <div className="cta-banner-bg" aria-hidden="true" />
                    <div className="cta-content">
                        <h2 className="cta-heading">Ready to make better property decisions?</h2>
                        <p className="cta-subtext">
                            Talk to our team. No commitment — just a conversation about what you need and how we can help.
                        </p>
                        <div className="cta-actions">
                            <button className="btn btn-primary">Start a Conversation</button>
                            <button className="btn btn-outline">See Our Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaBanner;
