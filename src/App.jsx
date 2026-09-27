import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import ClubDetails from "./pages/ClubDetails";
import Events from "./pages/Events";
import Recruitments from "./pages/Recruitments";
import RecruitmentForm from "./pages/RecruitmentForm";

function App() {

    return (
        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/clubs"
                    element={<Clubs />}
                />

                <Route
                    path="/clubs/:clubId"
                    element={<ClubDetails />}
                />

                <Route
                    path="/events"
                    element={<Events />}
                />

                <Route
                    path="/recruitments"
                    element={<Recruitments />}
                />

                <Route
                    path="/recruitments/:recruitmentId"
                    element={<RecruitmentForm />}
                />

            </Routes>
        </>
    );
}

export default App;