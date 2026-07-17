import "./testimonials.css";

const testimonials = [
    {
        quote: "Their market report saved us from a bad acquisition. The data was specific, local, and actionable — not the generic stuff you find online.",
        name: "A. Okafor",
        role: "Head of Acquisitions",
        company: "Property Development Firm",
        initials: "AO",
    },
    {
        quote: "We finally have a reliable, up-to-date picture of what's happening in the Lagos market. It's completely changed how we make investment decisions.",
        name: "B. Mohammed",
        role: "Investment Manager",
        company: "Asset Management Firm",
        initials: "BM",
    },
];

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <span className="section-eyebrow">What Clients Say</span>
                    <h2 className="section-heading">Don't take our word for it.</h2>
                </div>

                <ul className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <li key={i} className="testimonial-card">
                            <span className="quote-mark" aria-hidden="true">"</span>
                            <blockquote className="testimonial-quote">{t.quote}</blockquote>
                            <div className="testimonial-author">
                                <div className="author-avatar" aria-hidden="true">{t.initials}</div>
                                <div className="author-info">
                                    <p className="author-name">{t.name}</p>
                                    <p className="author-role">{t.role}, {t.company}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <p className="testimonials-note">
                    * Testimonials are placeholder — replace with real client quotes before launch.
                </p>
            </div>
        </section>
    );
}

export default Testimonials;
