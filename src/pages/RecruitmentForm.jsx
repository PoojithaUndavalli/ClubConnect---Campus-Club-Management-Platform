import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import recruitments from "../data/recruitments";

function RecruitmentForm() {

    const { recruitmentId } = useParams();

    const recruitment = recruitments.find(
        (item) => item.id === Number(recruitmentId)
    );


    const [submitted, setSubmitted] = useState(false);


    const [formData, setFormData] = useState({
        name: "",
        rollNumber: "",
        email: "",
        phone: "",
        branch: "",
        year: "",
        reason: ""
    });


    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };


    const handleSubmit = (event) => {

        event.preventDefault();

        setSubmitted(true);

    };


    if (!recruitment) {

        return (
            <main className="application-page">

                <div className="application-not-found">

                    <h1>
                        Recruitment Not Found
                    </h1>

                    <Link
                        to="/recruitments"
                        className="primary-btn"
                    >
                        ← Back to Recruitments
                    </Link>

                </div>

            </main>
        );
    }


    /* ================= AFTER SUBMISSION ================= */

    if (submitted) {

        return (
            <main className="application-page">

                <section className="application-success">

                    <div className="success-icon">
                        ✓
                    </div>

                    <span className="section-tag">
                        APPLICATION SUBMITTED
                    </span>

                    <h1>
                        Application Under Consideration
                    </h1>

                    <p>
                        Your application for the{" "}
                        <strong>
                            {recruitment.role}
                        </strong>{" "}
                        recruitment at{" "}
                        <strong>
                            {recruitment.club}
                        </strong>{" "}
                        has been submitted successfully.
                    </p>

                    <p>
                        The club will review your application
                        and contact you regarding the next steps.
                    </p>

                    <Link
                        to="/recruitments"
                        className="primary-btn"
                    >
                        ← Back to Recruitments
                    </Link>

                </section>

            </main>
        );
    }


    /* ================= FORM ================= */

    return (
        <main className="application-page">

            <section className="application-container">

                {/* BACK */}

                <Link
                    to="/recruitments"
                    className="back-link"
                >
                    ← Back to Recruitments
                </Link>


                {/* HEADER */}

                <div className="application-header">

                    <span className="section-tag">
                        CLUB RECRUITMENT
                    </span>

                    <h1>
                        Apply to{" "}
                        <span>
                            {recruitment.club}
                        </span>
                    </h1>

                    <p>
                        {recruitment.role}
                    </p>

                </div>


                {/* FORM */}

                <form
                    className="application-form"
                    onSubmit={handleSubmit}
                >

                    {/* NAME */}

                    <div className="form-group">

                        <label>
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />

                    </div>


                    {/* ROLL NUMBER */}

                    <div className="form-group">

                        <label>
                            Roll Number
                        </label>

                        <input
                            type="text"
                            name="rollNumber"
                            value={formData.rollNumber}
                            onChange={handleChange}
                            placeholder="Enter your roll number"
                            required
                        />

                    </div>


                    {/* EMAIL */}

                    <div className="form-group">

                        <label>
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />

                    </div>


                    {/* PHONE */}

                    <div className="form-group">

                        <label>
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />

                    </div>


                    {/* BRANCH */}

                    <div className="form-group">

                        <label>
                            Branch
                        </label>

                        <select
                            name="branch"
                            placeholder="Select your branch"
                            value={formData.branch}
                            onChange={handleChange}
                            required
                        >

                            <option value="" disabled>
                                Select your branch
                            </option>

                            <option value="CSE">
                                Computer Science & Engineering
                            </option>

                            <option value="CSE-AIML">
                                Computer Science & Engineering (Artificial Intelligence & Machine Learning)
                            </option>

                            <option value="CSE-IOT">
                                Computer Science & Engineering (Internet of Things)
                            </option>

                            <option value="AIDS">
                                Artificial Intelligence & Data Science
                            </option>

                            <option value="IT">
                                Information Technology
                            </option>

                            <option value="ECE">
                                Electronics & Communication
                            </option>

                            <option value="EVL">
                                Electronics & Communication (VLSI)
                            </option>

                            <option value="EEE">
                                Electrical & Electronics
                            </option>

                            <option value="MECH">
                                Mechanical Engineering
                            </option>

                            <option value="CIVIL">
                                Civil Engineering
                            </option>

                            <option value="CHEM">
                                Chemical Engineering
                            </option>

                            <option value="BIO-TECH">
                                Biotechnology
                            </option>

                        </select>

                    </div>


                    {/* YEAR */}

                    <div className="form-group">

                        <label>
                            Year of Study
                        </label>

                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            required
                        >

                            <option value="" disabled>
                                Select your year
                            </option>

                            <option value="1">
                                1st Year
                            </option>

                            <option value="2">
                                2nd Year
                            </option>

                            <option value="3">
                                3rd Year
                            </option>

                            <option value="4">
                                4th Year
                            </option>

                        </select>

                    </div>


                    {/* REASON */}

                    <div className="form-group full-width">

                        <label>
                            Why do you want to join?
                        </label>

                        <textarea
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            placeholder="Tell us briefly about your interest..."
                            rows="5"
                            required
                        />

                    </div>


                    {/* SUBMIT */}

                    <button
                        type="submit"
                        className="submit-application-btn"
                    >
                        Submit Application →
                    </button>

                </form>

            </section>

        </main>
    );
}

export default RecruitmentForm;