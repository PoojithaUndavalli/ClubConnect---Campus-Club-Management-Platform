import { Link } from "react-router-dom";

import clubs from "../data/clubs";

function Clubs() {

    return (
        <main className="clubs-page">

            {/* ================= PAGE HEADER ================= */}

            <section className="clubs-header">

                <span className="section-tag">
                    CAMPUS COMMUNITIES
                </span>

                <h1>
                    Explore <span>Clubs</span>
                </h1>

                <p>
                    Discover communities, meet like-minded
                    students and find something you're passionate about.
                </p>

            </section>


            {/* ================= CLUB CARDS ================= */}

            <section className="clubs-container">

                <div className="clubs-grid">

                    {clubs.map((club) => (

                        <div
                            className="club-card"
                            key={club.id}
                        >

                            {/* ================= CLUB ICON ================= */}

                            <div className="club-icon">
                                {club.icon}
                            </div>


                            {/* ================= CATEGORY ================= */}

                            <span className="club-category">
                                {club.category}
                            </span>


                            {/* ================= CLUB NAME ================= */}

                            <h2>
                                {club.name}
                            </h2>


                            {/* ================= DESCRIPTION ================= */}

                            <p>
                                {club.description}
                            </p>


                            {/* ================= MEMBERS ================= */}

                            <div className="club-members">
                                👥 {club.members} Members
                            </div>


                            {/* ================= EXPLORE ================= */}

                            <div className="club-actions">

                                <Link
                                    to={`/clubs/${club.id}`}
                                    className="explore-btn"
                                >
                                    Explore →
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </main>
    );
}

export default Clubs;