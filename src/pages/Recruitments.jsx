import { Link } from "react-router-dom";

import recruitments from "../data/recruitments";

function Recruitments() {

    return (
        <main className="recruitments-page">

            {/* ================= HEADER ================= */}

            <section className="recruitments-header">

                <span className="section-tag">
                    JOIN THE COMMUNITY
                </span>

                <h1>
                    Ongoing <span>Recruitments</span>
                </h1>

                <p>
                    Explore current club recruitments and
                    apply to become part of a campus community.
                </p>

            </section>


            {/* ================= RECRUITMENTS ================= */}

            <section className="recruitments-container">

                <div className="recruitments-grid">

                    {recruitments.map((recruitment) => (

                        <div
                            className="recruitment-card"
                            key={recruitment.id}
                        >

                            {/* STATUS */}

                            <span className="recruitment-status">
                                ● OPEN
                            </span>


                            {/* CLUB */}

                            <h2>
                                {recruitment.club}
                            </h2>


                            {/* ROLE */}

                            <h3>
                                {recruitment.role}
                            </h3>


                            {/* DESCRIPTION */}

                            <p>
                                {recruitment.description}
                            </p>

                            {/* POSITIONS */}
                            
                            <ul className="recruitment-positions">
                                {recruitment.positions.map((position, index) => (
                                    <li key={index}>{position}</li>
                                ))}
                            </ul>

                            {/* DEADLINE */}

                            <div className="recruitment-deadline">
                                📅 Application Deadline:
                                <strong>
                                    {recruitment.deadline}
                                </strong>
                            </div>


                            {/* APPLY */}

                            <Link
                                to={`/recruitments/${recruitment.id}`}
                                className="apply-btn"
                            >
                                Apply Now →
                            </Link>

                        </div>

                    ))}

                </div>

            </section>

        </main>
    );
}

export default Recruitments;