import { Link, useParams } from "react-router-dom";
import clubs from "../data/clubs";

function ClubDetails() {

    const { clubId } = useParams();

    const club = clubs.find(
        (club) => club.id === Number(clubId)
    );

    // If club doesn't exist
    if (!club) {
        return (
            <main className="club-details-page">

                <div className="not-found">

                    <h1>Club Not Found</h1>

                    <p>
                        Sorry, we couldn't find the club you're looking for.
                    </p>

                    <Link
                        to="/clubs"
                        className="primary-btn"
                    >
                        ← Back to Clubs
                    </Link>

                </div>

            </main>
        );
    }


    return (
        <main className="club-details-page">

            {/* ================= HERO ================= */}

            <section className="club-details-hero">

                <Link
                    to="/clubs"
                    className="back-link"
                >
                    ← Back to Clubs
                </Link>


                <div className="club-hero-content">

                    <div className="club-large-icon">
                        {club.icon}
                    </div>


                    <div>

                        <span className="club-category">
                            {club.category}
                        </span>

                        <h1>
                            {club.name}
                        </h1>

                        <p>
                            {club.description}
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CLUB STATS ================= */}

            <section className="club-stats">

                <div className="club-stat-card">

                    <span className="stat-icon">
                        👥
                    </span>

                    <div>
                        <strong>
                            {club.members}
                        </strong>

                        <p>
                            Members
                        </p>
                    </div>

                </div>


                <div className="club-stat-card">

                    <span className="stat-icon">
                        🏷️
                    </span>

                    <div>
                        <strong>
                            {club.category}
                        </strong>

                        <p>
                            Category
                        </p>
                    </div>

                </div>


                <div className="club-stat-card">

                    <span className="stat-icon">
                        🎯
                    </span>

                    <div>
                        <strong>
                            Active
                        </strong>

                        <p>
                            Club Status
                        </p>
                    </div>

                </div>

            </section>


            {/* ================= ABOUT ================= */}

            <section className="club-about">

                <div className="club-section-heading">

                    <span>
                        ABOUT THE CLUB
                    </span>

                    <h2>
                        What is {club.name}?
                    </h2>

                </div>


                <p>
                    {club.description}
                </p>

                <p>
                    {club.name} provides students with an opportunity
                    to explore their interests, develop new skills and
                    collaborate with fellow students through various
                    campus activities.
                </p>

            </section>


            {/* ================= ACTIVITIES ================= */}

            <section className="club-activities">

                <div className="club-section-heading">

                    <span>
                        ACTIVITIES
                    </span>

                    <h2>
                        What we do
                    </h2>

                </div>


                <div className="activity-grid">

                    <div className="activity-card">

                        <div>
                            🎯
                        </div>

                        <h3>
                            Club Activities
                        </h3>

                        <p>
                            Participate in regular activities,
                            practices and sessions organised
                            by the club.
                        </p>

                    </div>


                    <div className="activity-card">

                        <div>
                            🤝
                        </div>

                        <h3>
                            Team Collaboration
                        </h3>

                        <p>
                            Work with fellow students and
                            build teamwork and communication
                            skills.
                        </p>

                    </div>


                    <div className="activity-card">

                        <div>
                            🏆
                        </div>

                        <h3>
                            Competitions & Events
                        </h3>

                        <p>
                            Take part in competitions,
                            performances and campus events.
                        </p>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default ClubDetails;