import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

// eslint-disable-next-line react/prop-types
const Header = ({ isAuthenticated, setIsAuthenticated }) => {
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setIsAuthenticated(false);
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    return (
        <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link to="/" className="text-2xl font-bold">
                    Food King
                </Link>
                <nav className="space-x-6">
                    <Link
                        to="/"
                        className="hover:text-gray-300 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-gray-300 transition duration-300"
                    >
                        About Us
                    </Link>
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="hover:text-gray-300 transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="hover:text-gray-300 transition duration-300"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="hover:text-gray-300 transition duration-300"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
