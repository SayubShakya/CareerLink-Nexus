export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">CareerLink</h3>
                        <p className="text-gray-600">
                            Connecting talent with opportunities.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
                            <li><a href="/jobs" className="text-gray-600 hover:text-blue-600">Browse Jobs</a></li>
                            <li><a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                        <p className="text-gray-600">Email: info@careerlink.com</p>
                        <p className="text-gray-600">Phone: +977 123-456-7890</p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} CareerLink. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
