import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <>
            <div className="container mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="🔍 Suche nach Titel oder Autor..."
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </>
    );
};

export default SearchBar;
