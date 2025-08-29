import React from 'react';
import Icon from '../components/Icon';

const DashboardPage = ({ onNavigate, onOpenModal }) => (
    <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Добредојде назад, Ана!</h1>
        <p className="mt-2 text-slate-500">Подготвени да го направите следниот чекор во вашата кариера?</p>
        
        {/* Main Banner CTA for Career Quiz */}
        <div className="mt-8 bg-indigo-600 rounded-lg p-6 md:p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold">Несигурни од каде да почнете?</h2>
                <p className="mt-2 max-w-lg">Нашиот квиз за кариера ќе ви помогне да ги откриете вашите интереси и да ви даде насока. Потребни се само 5 минути.</p>
                <button onClick={() => onNavigate('quizzes')} className="mt-6 bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg hover:bg-indigo-50 transition">Започни го квизот</button>
            </div>
            <Icon name="compass" className="absolute -right-8 -bottom-8 h-48 w-48 text-indigo-500 opacity-20" />
        </div>
        
        {/* Secondary Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Card for Readiness Questionnaire (Modal) */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="bg-rose-100 p-4 rounded-full">
                    <Icon name="clipboard-check" className="h-8 w-8 text-rose-600" />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800">Проверка на подготвеност</h3>
                    <p className="mt-1 text-slate-500">Направете само-рефлексија пред да започнете со барање работа.</p>
                </div>
                <button onClick={onOpenModal} className="bg-rose-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-rose-700 transition w-full sm:w-auto flex-shrink-0">Започни</button>
            </div>

            {/* Your Active Roadmap */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800">Вашиот активен патоказ</h3>
                <div className="mt-4 border-2 border-dashed border-slate-200 rounded-lg p-10 text-center">
                    <Icon name="map" className="h-12 w-12 mx-auto text-slate-400" />
                    <p className="mt-2 text-slate-500">Сè уште немате избрано патоказ.</p>
                    <button onClick={() => onNavigate('roadmaps')} className="mt-4 bg-slate-100 text-slate-700 font-semibold px-4 py-2 rounded-lg hover:bg-slate-200 transition text-sm">Разгледај ги патоказите</button>
                </div>
            </div>
        </div>

        {/* Latest from Community */}
        <div className="mt-8 bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800">Најново од заедницата</h3>
            <ul className="mt-4 space-y-2">
                <li onClick={() => onNavigate('community')} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                    <div>
                        <p className="font-medium text-slate-700">Како да се подготвам за првото техничко интервју?</p>
                        <p className="text-sm text-slate-500">Започнато од Зоран П. • 2 одговори</p>
                    </div>
                    <Icon name="chevron-right" className="text-slate-400 hidden sm:block" />
                </li>
                <li onClick={() => onNavigate('community')} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                    <div>
                        <p className="font-medium text-slate-700">Дали вреди да се учи економија и Data Science паралелно?</p>
                        <p className="text-sm text-slate-500">Започнато од Мартина К. • 5 одговори</p>
                    </div>
                    <Icon name="chevron-right" className="text-slate-400 hidden sm:block" />
                </li>
            </ul>
        </div>
    </div>
);

export default DashboardPage;

