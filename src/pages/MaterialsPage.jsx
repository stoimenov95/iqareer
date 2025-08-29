import React, { useState } from 'react';
import Icon from '../components/Icon';

const materialsData = [
  { type: 'СТАТИЈА', title: '5 работи што треба да ги знаете пред да почнете со React', area: 'Front-End', icon: 'book-marked', color: 'indigo' },
  { type: 'ВИДЕО', title: 'JavaScript Full Course for Beginners', area: 'Front-End', icon: 'youtube', color: 'red' },
  { type: 'КУРС', title: 'Python for Data Science and Machine Learning', area: 'Data Science', icon: 'server', color: 'sky' },
  { type: 'СТАТИЈА', title: 'Вовед во SQL: Основни команди', area: 'Back-End', icon: 'database', color: 'emerald' },
  { type: 'КУРС', title: 'Автоматско тестирање со Selenium WebDriver', area: 'QA', icon: 'bug', color: 'teal' },
  { type: 'ВИДЕО', title: '10 UX принципи за подобар дизајн', area: 'UX/UI', icon: 'pen-tool', color: 'purple' },
  { type: 'СТАТИЈА', title: 'Како да се изгради REST API со Node.js и Express', area: 'Back-End', icon: 'terminal-square', color: 'slate' },
  { type: 'КУРС', title: 'Вовед во Machine Learning', area: 'Data Science', icon: 'brain-circuit', color: 'amber' },
  { type: 'ВИДЕО', title: 'Figma туторијал за почетници', area: 'UX/UI', icon: 'figma', color: 'pink' },
  { type: 'СТАТИЈА', title: 'Agile и Scrum објаснети на едноставен начин', area: 'Project Management', icon: 'users', color: 'orange' },
];

const filters = ['Сите', 'Front-End', 'Back-End', 'QA', 'Data Science', 'UX/UI'];

const MaterialsPage = () => {
    const [activeFilter, setActiveFilter] = useState('Сите');

    const filteredMaterials = activeFilter === 'Сите' 
        ? materialsData 
        : materialsData.filter(material => material.area === activeFilter);

    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Материјали за учење</h1>
            <p className="mt-2 text-slate-500">Ресурси, статии и курсеви за да ги подобрите вашите вештини.</p>
            
            {/* Filter Buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
                {filters.map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                            activeFilter === filter 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Materials Grid */}
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMaterials.map((material, index) => (
                    <div key={index} className="bg-white rounded-lg border border-slate-200 group flex flex-col">
                        <div className={`h-32 bg-slate-100 flex items-center justify-center rounded-t-lg`}>
                            <Icon name={material.icon} className={`h-12 w-12 text-${material.color}-500`} />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <p className={`text-sm font-semibold text-${material.color}-600`}>{material.type}</p>
                            <h3 className="mt-1 font-semibold text-slate-800 flex-grow">{material.title}</h3>
                             <a href="#" className={`mt-4 inline-block text-sm font-semibold text-${material.color}-600 group-hover:underline`}>Прочитај повеќе →</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MaterialsPage;

