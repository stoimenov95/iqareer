import React, { useState } from 'react';
import Icon from '../components/Icon';
import RoadmapModal from '../components/RoadmapModal';

// Податоци за патоказите
const roadmapsData = {
  'frontend': {
    id: 'frontend',
    title: "Како да станеш Front-End програмер",
    icon: "code",
    color: "indigo",
    description: "Од основите на HTML и CSS до напредни JavaScript Frameworks.",
    phases: [
      { 
        title: "Фаза 1: Основи (1-2 месеци)", 
        skills: ["HTML5", "CSS3 (Flexbox, Grid)", "JavaScript (ES6+)", "DOM Манипулација"],
        project: "Креирај клон на едноставна веб-страница (пр. лично портфолио)."
      },
      { 
        title: "Фаза 2: Алатки и Frameworks (2-3 месеци)", 
        skills: ["Git & GitHub", "React.js (Components, Hooks)", "Tailwind CSS", "API интеграции"],
        project: "Изгради 'Weather App' или 'Movie Database' апликација со податоци од јавно API."
      },
      { 
        title: "Фаза 3: Напредни концепти (1-2 месеци)", 
        skills: ["State Management (Redux/Zustand)", "Тестирање (Jest, RTL)", "Перформанси и оптимизација"],
        project: "Изгради покомплексен проект (пр. front-end за e-commerce) и постави го онлајн."
      },
       { 
        title: "Фаза 4: Подготовка за работа", 
        skills: ["Градење на портфолио", "Подготовка на CV и LinkedIn", "Вежбање за техничко интервју"],
        project: "Комплетирај го твоето портфолио со 3 квалитетни проекти и започни со аплицирање."
      }
    ]
  },
  'qa': {
    id: 'qa',
    title: "Транзиција во QA / Software Tester",
    icon: "bug",
    color: "teal",
    description: "Научете ги основите на мануелно и автоматско тестирање.",
    phases: [
       { 
        title: "Фаза 1: Основи на тестирање (1 месец)", 
        skills: ["Принципи на тестирање", "SDLC & STLC", "Типови на тестирање", "Пишување на тест-сценарија"],
        project: "Напиши детални тест-сценарија за логин и регистрациска форма."
      },
      { 
        title: "Фаза 2: Алатки и мануелно тестирање (1-2 месеци)", 
        skills: ["Jira", "Postman (API Testing)", "Основи на SQL", "DevTools во прелистувач"],
        project: "Мануелно тестирај веб-апликација и пријави најмалку 10 багови во Jira со јасни чекори."
      },
      { 
        title: "Фаза 3: Вовед во автоматизација (2-3 месеци)", 
        skills: ["Основи на JavaScript или Python", "Selenium WebDriver или Cypress.io", "Пишување на први скрипти"],
        project: "Автоматизирај го процесот на логирање и уште 2 клучни функционалности на тест-страница."
      },
      { 
        title: "Фаза 4: Подготовка за работа", 
        skills: ["ISTQB сертификат (опционално)", "CV со фокус на QA проекти", "Подготовка за QA интервју"],
        project: "Придружи се на open-source проект како волонтер за тестирање за да стекнеш искуство."
      }
    ]
  },
  'data': {
    id: 'data',
    title: "Од студент по економија до Data Analyst",
    icon: "bar-chart-2",
    color: "sky",
    description: "Комбинирајте го вашето знаење со Python, SQL и алатки за визуелизација.",
     phases: [
       { 
        title: "Фаза 1: Основи и алатки (2 месеци)", 
        skills: ["Напреден Excel (Pivot, VLOOKUP)", "SQL (SELECT, JOIN, GROUP BY)", "Основи на статистика"],
        project: "Анализирај сет на податоци за продажба користејќи Excel и SQL за да одговориш на бизнис прашања."
      },
      { 
        title: "Фаза 2: Програмирање и визуелизација (2-3 месеци)", 
        skills: ["Python (Pandas, NumPy)", "Matplotlib/Seaborn", "Tableau или Power BI"],
        project: "Исчисти, анализирај и визуелизирај податоци со Python. Креирај интерактивен dashboard во Tableau."
      },
      { 
        title: "Фаза 3: Напредни техники (1-2 месеци)", 
        skills: ["A/B тестирање", "Data Storytelling", "Машинско учење (основи)"],
        project: "Направи целосна анализа од почеток до крај и презентирај ги резултатите преку извештај."
      },
       { 
        title: "Фаза 4: Подготовка за работа", 
        skills: ["Портфолио на GitHub/Tableau Public", "Приспособување на CV", "Case-study интервјуа"],
        project: "Најди јавен сет на податоци поврзан со економија и направи уникатен аналитички проект."
      }
    ]
  }
};


const RoadmapsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRoadmap, setSelectedRoadmap] = useState(null);

    const openRoadmapModal = (roadmapId) => {
        setSelectedRoadmap(roadmapsData[roadmapId]);
        setIsModalOpen(true);
    };

    const closeRoadmapModal = () => {
        setIsModalOpen(false);
        setSelectedRoadmap(null);
    };

    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Патокази за кариера</h1>
            <p className="mt-2 text-slate-500">Чекор-по-чекор водичи за да стигнете до вашата посакувана кариера.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {Object.values(roadmapsData).map(roadmap => (
                    <div key={roadmap.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden group flex flex-col">
                        <div className="p-6 flex-1">
                            <Icon name={roadmap.icon} className={`h-10 w-10 text-${roadmap.color}-600 mb-4`} />
                            <h3 className="text-lg font-semibold text-slate-800">{roadmap.title}</h3>
                            <p className="mt-2 text-sm text-slate-500">{roadmap.description}</p>
                        </div>
                        <button onClick={() => openRoadmapModal(roadmap.id)} className={`block bg-slate-50 text-center py-3 font-semibold text-${roadmap.color}-600 group-hover:bg-${roadmap.color}-100 transition`}>
                            Започни го патоказот
                        </button>
                    </div>
                ))}
            </div>
            {selectedRoadmap && <RoadmapModal isOpen={isModalOpen} onClose={closeRoadmapModal} roadmap={selectedRoadmap} />}
        </div>
    );
};

export default RoadmapsPage;

