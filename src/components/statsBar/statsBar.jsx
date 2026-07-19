import "./statsBar.css";

const stats = [
    { number: "500+", label: "Properties Analysed" },
    { number: "5+",  label: "Years of Data" },
    { number: "10+",  label: "Clients Served" },
    { number: "1",    label: "Market Covered" },
];

function StatsBar() {
    return (
        <section className="stats-bar">
            <div className="container">
                <ul className="stats-grid">
                    {stats.map((stat, i) => (
                        <li key={i} className="stat-item">
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default StatsBar;
