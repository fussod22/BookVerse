import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white py-3 mb-4">
            <div className="container text-center">
                <h1 className="fw-bold">BookVerse</h1>
                <p className="mb-0">Your personal library</p>
            </div>
        </header>
    );
};

export default Header;
