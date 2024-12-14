import React, { useState } from 'react';
import { Home, Book, Music, Stethoscope, Globe, Gamepad, Search } from 'lucide-react';

// Header Component
const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-indigo-600">
        Phantom's Haven
      </div>
      <nav className="flex items-center space-x-6">
        <a href="/" className="flex items-center hover:text-indigo-600 transition">
          <Home className="mr-2" size={18} /> HOME
        </a>
        <a href="/novel" className="flex items-center hover:text-indigo-600 transition">
          <Book className="mr-2" size={18} /> NOVEL
        </a>
        <a href="/music" className="flex items-center hover:text-indigo-600 transition">
          <Music className="mr-2" size={18} /> MUSIC
        </a>
        <a href="/med" className="flex items-center hover:text-indigo-600 transition">
          <Stethoscope className="mr-2" size={18} /> MED
        </a>
        <a href="/tcm" className="flex items-center hover:text-indigo-600 transition">
          <Globe className="mr-2" size={18} /> TCM
        </a>
        <a href="/lingo" className="flex items-center hover:text-indigo-600 transition">
          <Globe className="mr-2" size={18} /> LINGO
        </a>
        <a href="/games" className="flex items-center hover:text-indigo-600 transition">
          <Gamepad className="mr-2" size={18} /> GAMES
        </a>
      </nav>
      <form onSubmit={handleSearch} className="flex items-center">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-l px-2 py-1"
        />
        <button 
          type="submit" 
          className="bg-indigo-500 text-white px-3 py-1 rounded-r hover:bg-indigo-600 transition"
        >
          <Search size={18} />
        </button>
      </form>
    </header>
  );
};

// Footer Component
const Footer = () => {
  const [visitors, setVisitors] = useState(1234);
  const [pageViews, setPageViews] = useState(5678);

  return (
    <footer className="bg-gray-100 py-6 px-6 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-600">
          © 2024 Phantom's Haven. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
        </div>
        <div className="text-sm text-gray-600">
          Visitors: {visitors} | Page Views: {pageViews}
        </div>
      </div>
    </footer>
  );
};

// Homepage Component
const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    // Placeholder search functionality
    console.log('Searching for:', term);
    // Implement actual search logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Welcome to Phantom's Haven</h1>
        
        {/* Recent Updates Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Recent Updates</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-bold text-indigo-800">Novel Writing</h3>
              <p className="text-gray-600">Latest chapter draft completed</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-bold text-indigo-800">Music Creation</h3>
              <p className="text-gray-600">New track in progress</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-bold text-indigo-800">Medical Notes</h3>
              <p className="text-gray-600">Recent research summary added</p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Quick Navigation</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: <Book />, title: 'Novels', path: '/novel' },
              { icon: <Music />, title: 'Music', path: '/music' },
              { icon: <Stethoscope />, title: 'Medical', path: '/med' },
              { icon: <Globe />, title: 'Languages', path: '/lingo' }
            ].map((item, index) => (
              <a 
                key={index} 
                href={item.path} 
                className="flex items-center justify-center bg-indigo-100 hover:bg-indigo-200 p-6 rounded-lg transition"
              >
                {React.cloneElement(item.icon, { size: 36, className: 'text-indigo-600 mr-2' })}
                <span className="text-indigo-800 font-semibold">{item.title}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;