import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import QuestionnaireModal from './components/QuestionnaireModal';
import DashboardPage from './pages/DashboardPage';
import RoadmapsPage from './pages/RoadmapsPage';
import MentorsPage from './pages/MentorsPage';
import QuizzesPage from './pages/QuizzesPage';
import CommunityPage from './pages/CommunityPage';
import MaterialsPage from './pages/MaterialsPage';
import Icon from './components/Icon';
import logoImage from './assets/logo.png';


// Главна App компонента
export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    setIsSidebarOpen(false); // Затвори го менито на мобилен при навигација
  }

  const PageContent = () => {
    switch (activePage) {
        case 'home':
            return <DashboardPage onNavigate={handleNavigate} onOpenModal={() => setIsModalOpen(true)} />;
        case 'roadmaps':
            return <RoadmapsPage />;
        case 'mentors':
            return <MentorsPage />;
        case 'quizzes':
            return <QuizzesPage />;
        case 'community':
            return <CommunityPage />;
        case 'materials':
            return <MaterialsPage />;
        default:
            return <DashboardPage onNavigate={handleNavigate} onOpenModal={() => setIsModalOpen(true)} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar и неговата overlay логика */}
      <Sidebar 
        logoSrc={logoImage}
        activePage={activePage} 
        onNavigate={handleNavigate} 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      {/* Главна содржина која ќе се скрола */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Мобилен Header */}
        <header className="md:hidden flex justify-between items-center p-4 border-b border-slate-200 bg-white sticky top-0 z-10">
            <a href="/" className="flex items-center space-x-2">
              <img src={logoImage} alt="iQareer Logo" className="h-8" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x32/eef2ff/4338ca?text=iQareer'; }}/>
            </a>
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-md hover:bg-slate-100">
              <Icon name="menu" className="h-6 w-6 text-slate-600" />
            </button>
        </header>
        
        {/* Содржина на страницата */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          <PageContent />
        </div>
      </main>

      <QuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

