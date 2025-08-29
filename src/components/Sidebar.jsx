import React from 'react';
import Icon from './Icon';
import logoImage from '../assets/logo.png';

const Sidebar = ({ activePage, onNavigate, isSidebarOpen, setIsSidebarOpen }) => {
  const navLinks = [
    { id: 'home', text: 'Контролна табла', icon: 'layout-dashboard' },
    { id: 'roadmaps', text: 'Патокази', icon: 'map' },
    { id: 'mentors', text: 'Ментори', icon: 'users' },
    { id: 'quizzes', text: 'Квизови', icon: 'clipboard-check' },
    { id: 'community', text: 'Заедница', icon: 'message-square' },
    { id: 'materials', text: 'Материјали', icon: 'book-open' },
  ];

  return (
    <>
      {/* Overlay за мобилно мени */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
      
      <aside className={`w-64 h-screen border-r border-slate-200 flex flex-col flex-shrink-0 bg-white z-30 transform transition-transform duration-300 ease-in-out fixed md:relative inset-y-0 left-0 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <a href="#" className="flex items-center space-x-2">
            <img src={logoImage} alt="iQareer Logo" className="h-8" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x32/eef2ff/4338ca?text=iQareer'; }} />
            <span className="text-2xl font-bold text-slate-800">iQareer</span>
          </a>
        </div>
        <nav className="px-4 flex-1">
          {navLinks.map(link => (
            <a key={link.id} href="#" onClick={() => onNavigate(link.id)} 
               className={`flex items-center p-3 my-1 rounded-lg transition-colors ${activePage === link.id ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600 hover:bg-slate-100'}`}>
              <Icon name={link.icon} className="mr-3" />
              <span>{link.text}</span>
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center space-x-3">
            <img src="https://placehold.co/40x40/e2e8f0/64748b?text=А" className="rounded-full" alt="Ана" />
            <div>
              <p className="font-semibold text-slate-800">Ана Стојанова</p>
              <a href="#" className="text-sm text-slate-500 hover:text-indigo-600">Поставки</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

