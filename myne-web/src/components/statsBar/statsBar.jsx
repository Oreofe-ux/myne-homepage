import "./StatsBar.css";

const stats = [
    { number: "500+", label: "Properties Analysed" },
    { number: "10+",  label: "Years of Data" },
    { number: "40+",  label: "Clients Served" },
    { number: "3",    label: "Markets Covered" },
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
