import React from 'react';
import Icon from '../components/Icon';

const MentorsPage = () => (
    <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Најди го твојот ментор</h1>
        <p className="mt-2 text-slate-500">Поврзете се со искусни професионалци од вашата посакувана област.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <img src="https://placehold.co/80x80/e0e7ff/4338ca?text=ИП" className="rounded-full mx-auto" alt="Иван Петровски" />
                <h3 className="mt-4 text-lg font-semibold text-slate-800">Иван Петровски</h3>
                <p className="text-sm text-slate-500">Senior Front-End Developer @ Company Inc.</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                    <p className="text-xs bg-indigo-100 text-indigo-700 rounded-full px-3 py-1">JavaScript</p>
                    <p className="text-xs bg-sky-100 text-sky-700 rounded-full px-3 py-1">React</p>
                </div>
                <button className="w-full mt-6 bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition">Закажи сесија</button>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <img src="https://placehold.co/80x80/d1fae5/059669?text=ЕТ" className="rounded-full mx-auto" alt="Елена Трајковска" />
                <h3 className="mt-4 text-lg font-semibold text-slate-800">Елена Трајковска</h3>
                <p className="text-sm text-slate-500">QA Lead @ Tech Solutions</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                    <p className="text-xs bg-teal-100 text-teal-700 rounded-full px-3 py-1">Automation</p>
                    <p className="text-xs bg-emerald-100 text-emerald-700 rounded-full px-3 py-1">CI/CD</p>
                </div>
                <button className="w-full mt-6 bg-slate-200 text-slate-800 font-semibold py-2 rounded-lg hover:bg-slate-300 transition">Погледни профил</button>
            </div>
        </div>
    </div>
);

export default MentorsPage;
