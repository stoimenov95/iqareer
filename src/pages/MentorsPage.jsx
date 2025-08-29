import React from 'react';
import Icon from '../components/Icon';

// Податоци за менторите
const mentorsData = [
  {
    name: 'Иван Петровски',
    title: 'Senior Front-End Developer @ Company Inc.',
    avatarText: 'ИП',
    avatarColor: 'indigo',
    tags: ['JavaScript', 'React'],
    available: true
  },
  {
    name: 'Елена Трајковска',
    title: 'QA Lead @ Tech Solutions',
    avatarText: 'ЕТ',
    avatarColor: 'teal',
    tags: ['Automation', 'CI/CD'],
    available: true
  },
  {
    name: 'Ана Попова',
    title: 'UX/UI Designer @ Creative Studio',
    avatarText: 'АП',
    avatarColor: 'purple',
    tags: ['Figma', 'User Research'],
    available: true
  },
  {
    name: 'Марко Георгиев',
    title: 'Data Scientist @ DataCorp',
    avatarText: 'МГ',
    avatarColor: 'sky',
    tags: ['Python', 'Machine Learning'],
    available: false
  },
    {
    name: 'Виктор Николов',
    title: 'Back-End Developer @ ServerSide Ltd.',
    avatarText: 'ВН',
    avatarColor: 'slate',
    tags: ['Node.js', 'Databases'],
    available: true
  },
  {
    name: 'Бојана Иванова',
    title: 'Agile Project Manager @ InnovateX',
    avatarText: 'БИ',
    avatarColor: 'orange',
    tags: ['Scrum', 'Jira'],
    available: true
  },
    {
    name: 'Горјан Мицевски',
    title: 'DevOps Engineer @ Cloudify',
    avatarText: 'ГМ',
    avatarColor: 'amber',
    tags: ['AWS', 'Docker'],
    available: false
  }
];

const MentorCard = ({ mentor }) => {
    const tagColors = {
        JavaScript: 'bg-indigo-100 text-indigo-700',
        React: 'bg-sky-100 text-sky-700',
        Automation: 'bg-teal-100 text-teal-700',
        'CI/CD': 'bg-emerald-100 text-emerald-700',
        Figma: 'bg-pink-100 text-pink-700',
        'User Research': 'bg-purple-100 text-purple-700',
        Python: 'bg-blue-100 text-blue-700',
        'Machine Learning': 'bg-amber-100 text-amber-700',
        'Node.js': 'bg-green-100 text-green-700',
        Databases: 'bg-slate-100 text-slate-700',
        Scrum: 'bg-orange-100 text-orange-700',
        Jira: 'bg-gray-100 text-gray-700',
        AWS: 'bg-yellow-100 text-yellow-700',
        Docker: 'bg-cyan-100 text-cyan-700',
    };

    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200 text-center flex flex-col">
            <img src={`https://placehold.co/80x80/${mentor.avatarColor === 'indigo' ? 'e0e7ff' : 'd1fae5'}/${mentor.avatarColor === 'indigo' ? '4338ca' : '059669'}?text=${mentor.avatarText}`} className="rounded-full mx-auto" alt={mentor.name} />
            <h3 className="mt-4 text-lg font-semibold text-slate-800">{mentor.name}</h3>
            <p className="text-sm text-slate-500 flex-grow">{mentor.title}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
                {mentor.tags.map(tag => (
                    <p key={tag} className={`text-xs ${tagColors[tag] || 'bg-slate-100 text-slate-700'} rounded-full px-3 py-1`}>{tag}</p>
                ))}
            </div>
            <button 
                className={`w-full mt-6 font-semibold py-2 rounded-lg transition ${mentor.available ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}
                disabled={!mentor.available}
            >
                {mentor.available ? 'Закажи сесија' : 'Не е достапен'}
            </button>
        </div>
    );
};


const MentorsPage = () => (
    <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Најди го твојот ментор</h1>
        <p className="mt-2 text-slate-500">Поврзете се со искусни професионалци од вашата посакувана област.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentorsData.map((mentor, index) => (
                <MentorCard key={index} mentor={mentor} />
            ))}
        </div>
        
        {/* Integration Section */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800">Лесно закажување со интеграција</h3>
            <p className="text-slate-500 mt-1">Откако ќе закажете сесија, таа автоматски ќе се појави во вашиот Google Calendar, а вие ќе добиете уникатен Zoom линк преку е-пошта.</p>
            <div className="mt-4 flex items-center space-x-4">
                <Icon name="calendar" className="h-10 w-10 text-blue-500" />
                <Icon name="plus" className="h-6 w-6 text-slate-400" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="#2D8CFF" d="M13.59 12l4.3-4.29a1 1 0 0 0-1.42-1.42l-4.29 4.3-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 1 0 1.42 1.42l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42-1.42z"/><path fill="#2D8CFF" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z"/></svg>
            </div>
        </div>
    </div>
);

export default MentorsPage;

