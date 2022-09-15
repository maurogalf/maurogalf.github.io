import "./App.css";
import Header from "./components/Header";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import { useState } from "react";
import ChangePage from "./components/ChangePage";

function App() {
    const [page, setPage] = useState(1);

    return (
        <div className="container">
            <ChangePage page={page} />
            <div>
                <Header />
            </div>
            <div className="body">
                <Routes>
                    <Route path="/" element={<Resume setPage={setPage} />} />
                    <Route
                        path="/projects"
                        element={<Projects setPage={setPage} />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
