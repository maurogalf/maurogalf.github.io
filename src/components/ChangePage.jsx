import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ChangePage = ({ page }) => {
    useEffect(() => {}, [page]);
    return (
        <div className="notch-container">
            <div className="notch">
                <div className="prevPage">
                    <Link to="/" className="btn">
                        ➤
                    </Link>
                </div>
                <p>{page}/2</p>
                <Link to="/projects" className="btn">
                    ➤
                </Link>
            </div>
        </div>
    );
};

export default ChangePage;
