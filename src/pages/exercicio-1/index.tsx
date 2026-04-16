'use client';

import { useState } from 'react';

export default function Ex01() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} style={{ minHeight: '100vh', transition: 'all 0.3s ease' }}>
      <div className="p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8">Botão Toggle</h1>
        
        <button
          onClick={toggleTheme}
          className={`
            px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300
            ${isDark 
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
            }
          `}
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>

        <div className={`mt-8 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <p className="text-lg">
            Tema atual: <strong>{isDark ? 'Dark' : 'Light'}</strong>
          </p>
          <p className="mt-4 text-sm opacity-75">
            Clique no botão acima para alternar entre os temas.
          </p>
        </div>
      </div>
    </div>
  );
}