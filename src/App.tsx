import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useBooks } from "./hooks/use-Books";

const App: React.FC = () => {
    const { books, setSearchQuery } = useBooks();
    return (
        <>
            <Header />
            <SearchBar onSearch={setSearchQuery}  />
            <div></div>
            {<div className="container">
                {books.map((book) => (
                    <div key={book.id}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>}
        </>
    );
};

export default App;
