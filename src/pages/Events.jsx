import events from "../data/events";

function Events() {

    return (
        <main className="events-page">

            {/* ================= HEADER ================= */}

            <section className="events-header">

                <span className="section-tag">
                    CAMPUS ACTIVITIES
                </span>

                <h1>
                    Ongoing <span>Events</span>
                </h1>

                <p>
                    Discover what's happening around campus
                    and take part in activities conducted by
                    student clubs.
                </p>

            </section>


            {/* ================= EVENTS ================= */}

            <section className="events-container">

                <div className="events-list">

                    {events.map((event) => (

                        <div
                            className="event-card"
                            key={event.id}
                        >

                            {/* EVENT INFORMATION */}

                            <div className="event-info">

                                <span className="event-status">
                                    ● ONGOING
                                </span>

                                <h2>
                                    {event.name}
                                </h2>

                                <p>
                                    {event.description}
                                </p>

                                <div className="event-meta">

                                    <span>
                                        🏛️ Conducted by:
                                        <strong>
                                            {event.club}
                                        </strong>
                                    </span>

                                    <span>
                                        📅 {event.startDate}

                                        {event.startDate !== event.endDate &&
                                            ` – ${event.endDate}`
                                        }
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </main>
    );
}

export default Events;