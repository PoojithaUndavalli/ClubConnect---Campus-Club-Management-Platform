import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            {/* ================= HERO ================= */}

            <section className="hero">

                <div className="hero-content">

                    <span className="hero-tag">
                        ✨ Your campus. Your community.
                    </span>

                    <h2>
                        Discover.
                        <span>Connect.</span>
                        Participate.
                    </h2>

                    <Link to="/clubs" className="primary-btn">
                        Explore Clubs →
                    </Link>

                </div>

            </section>

            {/* ================= WHY CAMPUSCLUBS ================= */}

            <section className="why-section">

                <div className="section-heading centered">

                    <h3>
                        Find a place where you <span>belong.</span>
                    </h3>

                    <p>
                        CampusClubs makes it easier for students
                        to discover communities and participate
                        in activities they enjoy.
                    </p>

                </div>


                <div className="feature-grid">

                    <div className="feature-card">

                        <div className="feature-icon">
                            🔎
                        </div>

                        <h3>Discover</h3>

                        <p>
                            Explore different clubs and find
                            communities that match your interests.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            🤝
                        </div>

                        <h3>Connect</h3>

                        <p>
                            Join clubs and connect with students
                            who share similar interests.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            🎯
                        </div>

                        <h3>Participate</h3>

                        <p>
                            Take part in club activities,
                            events and campus experiences.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <footer>
                <div className="footer-bottom">
                    <p>
                        ClubsConnect.
                        Connecting students with campus communities.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Home;