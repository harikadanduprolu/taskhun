import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, LogIn, UserPlus, Menu } from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Home className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">MyApp</span>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/login" className="flex items-center px-4 py-2 text-gray-600 hover:text-indigo-600 rounded-md">
                <LogIn className="h-5 w-5 mr-1" />
                Login
              </a>
              <a href="/signup" className="flex items-center px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
                <UserPlus className="h-5 w-5 mr-1" />
                Sign Up
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/login" className="flex items-center px-3 py-2 text-gray-600 hover:text-indigo-600 rounded-md">
                <LogIn className="h-5 w-5 mr-1" />
                Login
              </a>
              <a href="/signup" className="flex items-center px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
                <UserPlus className="h-5 w-5 mr-1" />
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-indigo-600">Your Amazing Platform</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join our community and discover amazing features that will help you achieve your goals.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Sign in
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Easy to Use</h3>
                <p className="mt-2 text-gray-600">
                  Our intuitive interface makes it simple to get started and achieve your goals.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Secure</h3>
                <p className="mt-2 text-gray-600">
                  Your data is protected with industry-leading security measures.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
                <p className="mt-2 text-gray-600">
                  Our dedicated team is here to help you whenever you need assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2024 MyApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
