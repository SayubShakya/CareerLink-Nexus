import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-blue-600">
                            CareerLink
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Jobs
                        </Link>
                        <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Profile
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                            Sign In
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
